import logging
import os
from typing import Dict, Optional, Callable, Any, Union, List

from dask.bag import Bag

from .csv import from_csv
from .elasticsearch import from_elasticsearch
from .example_preparator import ExamplePreparator
from .excel import from_excel
from .json import from_json

_logger = logging.getLogger(__name__)  # pylint: disable=invalid-name


_SUPPORTED_FORMATS = {
    "xls": (from_excel, dict(na_filter=False, keep_default_na=False, dtype=str)),
    "xlsx": (from_excel, dict(na_filter=False, keep_default_na=False, dtype=str)),
    "csv": (from_csv, dict(assume_missing=False, na_filter=False, dtype=str)),
    "json": (from_json, dict()),
    "jsonl": (from_json, dict()),
    "json-l": (from_json, dict()),
    "elasticsearch": (from_elasticsearch, dict()),
    "elastic": (from_elasticsearch, dict()),
    "es": (from_elasticsearch, dict()),
}


def add_supported_format(
    format_key: str, parser: Callable, default_params: Dict[str, Any]
) -> None:
    """
    Add a new format for dataset read
    :param format_key: the new format key
    :param parser: the parser function

    """

    if format_key in _SUPPORTED_FORMATS.keys():
        _logger.warning("Already defined format {}".format(format_key))
        return

    _SUPPORTED_FORMATS[format_key] = (parser, default_params)


def read_dataset(config: Dict, include_source: bool = False) -> Bag:
    example_preparator = ExamplePreparator(config.pop("forward", {}))

    return (
        _build_dataset(config)
        .map(_transform_example, example_preparator, include_source)
        .filter(lambda example: example is not None)
    )


def _transform_example(
    data: Dict, example_preparator: ExamplePreparator, include_source: bool = False
) -> Optional[Dict]:
    try:
        return example_preparator.read_info(data, include_source)
    except Exception as ex:
        _logger.warning(ex)
        return None


def _build_dataset(config: Dict) -> Bag:
    params = config.copy()  # Preserve original config (multiple reads)

    data_format = format_from_params(params.get("path"), params)

    if data_format in _SUPPORTED_FORMATS:
        data_reader, extra_arguments = _SUPPORTED_FORMATS[data_format]
        return data_reader(**{**params, **extra_arguments})
    else:
        raise Exception(
            "Format {} not supported. Supported formats are: {}".format(
                format, " ".join(_SUPPORTED_FORMATS)
            )
        )


def format_from_params(path: Union[List[str], str], params) -> Optional[str]:
    """

    Parameters
    ----------
    path
        Can be a st
    params

    Returns
    -------

    """
    format_field_name = "format"

    if isinstance(path, str):
        path = [path]

    if path and format_field_name not in params:
        _, extension = os.path.splitext(path[0])
        params[format_field_name] = extension[1:]

    try:
        return params.pop(format_field_name).lower()
    except KeyError:
        return None
