(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{417:function(t,e,a){"use strict";a.r(e);var i=a(26),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"biome-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#biome-text"}},[t._v("#")]),t._v(" biome.text "),a("Badge",{attrs:{text:"Package"}})],1),t._v(" "),a("div"),t._v(" "),a("h2",{staticClass:"section-title",attrs:{id:"header-submodules"}},[t._v("Sub-modules")]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.backbone",href:"backbone.html"}},[t._v("biome.text.backbone")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.cli",href:"cli/index.html"}},[t._v("biome.text.cli")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.commons",href:"commons.html"}},[t._v("biome.text.commons")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.configuration",href:"configuration.html"}},[t._v("biome.text.configuration")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.constants",href:"constants.html"}},[t._v("biome.text.constants")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.dataset",href:"dataset.html"}},[t._v("biome.text.dataset")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.environment",href:"environment.html"}},[t._v("biome.text.environment")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.errors",href:"errors.html"}},[t._v("biome.text.errors")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.explore",href:"explore.html"}},[t._v("biome.text.explore")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.features",href:"features.html"}},[t._v("biome.text.features")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.featurizer",href:"featurizer.html"}},[t._v("biome.text.featurizer")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.helpers",href:"helpers.html"}},[t._v("biome.text.helpers")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.hpo",href:"hpo.html"}},[t._v("biome.text.hpo")])]),t._v(" "),a("p",[t._v("This module includes all components related to a HPO experiment execution.\nIt tries to allow for a simple integration with HPO libraries like Ray Tune.")]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.loggers",href:"loggers.html"}},[t._v("biome.text.loggers")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.metrics",href:"metrics.html"}},[t._v("biome.text.metrics")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.modules",href:"modules/index.html"}},[t._v("biome.text.modules")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.pipeline",href:"pipeline.html"}},[t._v("biome.text.pipeline")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.text_cleaning",href:"text_cleaning.html"}},[t._v("biome.text.text_cleaning")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.tokenizer",href:"tokenizer.html"}},[t._v("biome.text.tokenizer")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.training_results",href:"training_results.html"}},[t._v("biome.text.training_results")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.ui",href:"ui/index.html"}},[t._v("biome.text.ui")])]),t._v(" "),a("code",{staticClass:"name"},[a("a",{attrs:{title:"biome.text.vocabulary",href:"vocabulary.html"}},[t._v("biome.text.vocabulary")])]),t._v(" "),a("p",[t._v("Manages vocabulary tasks and fetches vocabulary information …")]),t._v(" "),a("div"),t._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"tqdmwrapper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tqdmwrapper"}},[t._v("#")]),t._v(" TqdmWrapper "),a("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),a("pre",{staticClass:"language-python"},[a("code",[t._v("\n"),a("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),a("span",{staticClass:"ident"},[t._v("TqdmWrapper")]),t._v(" (*args, **kwargs)"),t._v("\n")]),t._v("\n")]),t._v(" "),a("p",[t._v("A tqdm wrapper for progress bar disable control")]),t._v(" "),a("p",[t._v("We must use this wrapper before any tqdm import (so, before any allennlp import). It's why we\nmust define at top package module level")]),t._v(" "),a("p",[t._v("We could discard this behaviour when this PR is merged: "),a("a",{attrs:{href:"https://github.com/tqdm/tqdm/pull/950"}},[t._v("https://github.com/tqdm/tqdm/pull/950")]),t._v("\nand then just environment vars instead.")]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),a("p",[t._v('iterable\n: iterable, optional\nIterable to decorate with a progressbar.\nLeave blank to manually manage the updates.\ndesc\n: str, optional\nPrefix for the progressbar.\ntotal\n: int or float, optional\nThe number of expected iterations. If unspecified,\nlen(iterable) is used if possible. If float("inf") or as a last\nresort, only basic progress statistics are displayed\n(no ETA, no progressbar).\nIf '),a("code",[t._v("gui")]),t._v(" is True and this parameter needs subsequent updating,\nspecify an initial arbitrary large positive number,\ne.g. 9e9.\nleave\n: bool, optional\nIf [default: True], keeps all traces of the progressbar\nupon termination of iteration.\nIf "),a("code",[t._v("None")]),t._v(", will leave only if "),a("code",[t._v("position")]),t._v(" is "),a("code",[t._v("0")]),t._v(".\nfile\n: "),a("code",[t._v("io.TextIOWrapper")]),t._v(" or "),a("code",[t._v("io.StringIO")]),t._v(", optional\nSpecifies where to output the progress messages\n(default: sys.stderr). Uses "),a("code",[t._v("file.write(str)")]),t._v(" and "),a("code",[t._v("file.flush()")]),t._v("\nmethods.\nFor encoding, see "),a("code",[t._v("write_bytes")]),t._v(".\nncols\n: int, optional\nThe width of the entire output message. If specified,\ndynamically resizes the progressbar to stay within this bound.\nIf unspecified, attempts to use environment width. The\nfallback is a meter width of 10 and no limit for the counter and\nstatistics. If 0, will not print any meter (only stats).\nmininterval\n: float, optional\nMinimum progress display update interval [default: 0.1] seconds.\nmaxinterval\n: float, optional\nMaximum progress display update interval [default: 10] seconds.\nAutomatically adjusts "),a("code",[t._v("miniters")]),t._v(" to correspond to "),a("code",[t._v("mininterval")]),t._v("\nafter long display update lag. Only works if "),a("code",[t._v("dynamic_miniters")]),t._v("\nor monitor thread is enabled.\nminiters\n: int or float, optional\nMinimum progress display update interval, in iterations.\nIf 0 and "),a("code",[t._v("dynamic_miniters")]),t._v(", will automatically adjust to equal\n"),a("code",[t._v("mininterval")]),t._v(" (more CPU efficient, good for tight loops).\nIf > 0, will skip display of specified number of iterations.\nTweak this and "),a("code",[t._v("mininterval")]),t._v(' to get very efficient loops.\nIf your progress is erratic with both fast and slow iterations\n(network, skipping items, etc) you should set miniters=1.\nascii\n: bool or str, optional\nIf unspecified or False, use unicode (smooth blocks) to fill\nthe meter. The fallback is to use ASCII characters " 123456789#".\ndisable\n: bool, optional\nWhether to disable the entire progressbar wrapper\n[default: False]. If set to None, disable on non-TTY.\nunit\n: str, optional\nString that will be used to define the unit of each iteration\n[default: it].\nunit_scale\n: bool or int or float, optional\nIf 1 or True, the number of iterations will be reduced/scaled\nautomatically and a metric prefix following the\nInternational System of Units standard will be added\n(kilo, mega, etc.) [default: False]. If any other non-zero\nnumber, will scale '),a("code",[t._v("total")]),t._v(" and "),a("code",[t._v("n")]),t._v(".\ndynamic_ncols\n: bool, optional\nIf set, constantly alters "),a("code",[t._v("ncols")]),t._v(" and "),a("code",[t._v("nrows")]),t._v(" to the\nenvironment (allowing for window resizes) [default: False].\nsmoothing\n: float, optional\nExponential moving average smoothing factor for speed estimates\n(ignored in GUI mode). Ranges from 0 (average speed) to 1\n(current/instantaneous speed) [default: 0.3].\nbar_format\n: str, optional\nSpecify a custom bar string formatting. May impact performance.\n[default: '{l_bar}{bar}{r_bar}'], where\nl_bar='{desc}: {percentage:3.0f}%|' and\nr_bar='| {n_fmt}/{total_fmt} [{elapsed}<{remaining}, '\n'{rate_fmt}{postfix}]'\nPossible vars: l_bar, bar, r_bar, n, n_fmt, total, total_fmt,\npercentage, elapsed, elapsed_s, ncols, nrows, desc, unit,\nrate, rate_fmt, rate_noinv, rate_noinv_fmt,\nrate_inv, rate_inv_fmt, postfix, unit_divisor,\nremaining, remaining_s.\nNote that a trailing \": \" is automatically removed after {desc}\nif the latter is empty.\ninitial\n: int or float, optional\nThe initial counter value. Useful when restarting a progress\nbar [default: 0]. If using float, consider specifying "),a("code",[t._v("{n:.3f}")]),t._v("\nor similar in "),a("code",[t._v("bar_format")]),t._v(", or specifying "),a("code",[t._v("unit_scale")]),t._v(".\nposition\n: int, optional\nSpecify the line offset to print this bar (starting from 0)\nAutomatic if unspecified.\nUseful to manage multiple bars at once (eg, from threads).\npostfix\n: dict or *, optional\nSpecify additional stats to display at the end of the bar.\nCalls "),a("code",[t._v("set_postfix(**postfix)")]),t._v(" if possible (dict).\nunit_divisor\n: float, optional\n[default: 1000], ignored unless "),a("code",[t._v("unit_scale")]),t._v(" is True.\nwrite_bytes\n: bool, optional\nIf (default: None) and "),a("code",[t._v("file")]),t._v(" is unspecified,\nbytes will be written in Python 2. If "),a("code",[t._v("True")]),t._v(" will also write\nbytes. In all other cases will default to unicode.\nlock_args\n: tuple, optional\nPassed to "),a("code",[t._v("refresh")]),t._v(" for intermediate output\n(initialisation, iterating, and updating).\nnrows\n: int, optional\nThe screen height. If specified, hides nested bars outside this\nbound. If unspecified, attempts to use environment height.\nThe fallback is 20.\ngui\n: bool, optional\nWARNING: internal parameter - do not use.\nUse tqdm.gui.tqdm(…) instead. If set, will attempt to use\nmatplotlib animations for a graphical output [default: False].")]),t._v(" "),a("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),a("p",[t._v("out\n: decorated iterator.")]),t._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),a("ul",{staticClass:"hlist"},[a("li",[t._v("tqdm.std.tqdm")]),t._v(" "),a("li",[t._v("tqdm.utils.Comparable")])])])}),[],!1,null,null,null);e.default=n.exports}}]);