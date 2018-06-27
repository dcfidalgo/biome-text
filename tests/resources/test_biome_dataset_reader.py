import json
import os
import unittest
from typing import Iterable, Dict

from allennlp.common import Params
from allennlp.data import DatasetReader
from allennlp.data.fields import TextField, LabelField

from recognai.data.dataset_readers.classification_dataset_reader import ClassificationDatasetReader
from tests.test_context import TEST_RESOURCES
from tests.test_support import DaskSupportTest

CSV_PATH = os.path.join(TEST_RESOURCES, 'resources/data/dataset_source.csv')
JSON_PATH = os.path.join(TEST_RESOURCES, 'resources/data/dataset_source.jsonl')

TOKENS_FIELD = 'tokens'
LABEL_FIELD = 'gold_label'


class BiomeDatasetReaderTest(DaskSupportTest):
    def test_dataset_reader_registration(self):
        dataset_reader = DatasetReader.by_name('classification_dataset_reader')
        self.assertEquals(ClassificationDatasetReader, dataset_reader)

    def test_read_input_csv(self):
        expected_length = 9
        expected_labels = ['blue-collar', 'technician', 'management', 'services', 'retired', 'admin.']
        expected_inputs = ['44.0', '53.0', '28.0', '39.0', '55.0', '30.0', '37.0', '36.0']

        json_config = os.path.join(TEST_RESOURCES, 'resources/datasets/biome.csv.spec.json')
        with open(json_config) as json_file:
            params = json.loads(json_file.read())
            reader = ClassificationDatasetReader.from_params(params=Params(dict()))
            dataset = reader.read(params)

            self._check_dataset(dataset, expected_length, expected_inputs, expected_labels)


    def test_read_input_json(self):
        expected_length = 9
        expected_labels = ['blue-collar', 'technician', 'management', 'services', 'retired', 'admin.']
        expected_inputs = ['44.0', '53.0', '28.0', '39.0', '55.0', '30.0', '37.0', '36.0']

        json_config = os.path.join(TEST_RESOURCES, 'resources/datasets/biome.json.spec.json')
        with open(json_config) as json_file:
            params = json.loads(json_file.read())
            reader = ClassificationDatasetReader.from_params(params=Params(dict()))
            dataset = list(reader.read(params))

            assert len(dataset) == 5
            for example in dataset:
                print(example.fields)

    def _check_dataset(self, dataset, expected_length: int, expected_inputs: Iterable, expected_labels: Iterable):
        def check_text_field(textField: TextField, expected_inputs: Iterable):
            if expected_inputs:
                [self.assertTrue(token.text in expected_inputs, msg="expected [%s] in input" % token.text) for token in
                 textField.tokens]

        def check_label_field(labelField: LabelField, expected_labels: Iterable):
            self.assertTrue(labelField.label in expected_labels, msg="expected [%s] in labels" % labelField.label)

        lInstances = list(dataset)
        self.assertEqual(expected_length, len(lInstances))
        for example in lInstances:
            self.assertTrue(TOKENS_FIELD in example.fields)
            self.assertTrue(LABEL_FIELD in example.fields)
            check_text_field(example.fields[TOKENS_FIELD], expected_inputs)
            check_label_field(example.fields[LABEL_FIELD], expected_labels)
