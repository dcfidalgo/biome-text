(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{398:function(e,t,a){"use strict";a.r(t);var s=a(33),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"biome-text-dataset-readers-datasource-reader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-dataset-readers-datasource-reader"}},[e._v("#")]),e._v(" biome.text.dataset_readers.datasource_reader "),a("Badge",{attrs:{text:"Module"}})],1),e._v(" "),a("dl",[a("h2",{attrs:{id:"biome.text.dataset_readers.datasource_reader.DataSourceReader"}},[e._v("DataSourceReader "),a("Badge",{attrs:{text:"Class"}})],1),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[e._v("    "),a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("DataSourceReader")]),e._v(" ("),e._v("\n    "),a("span",[e._v("tokenizer: allennlp.data.tokenizers.tokenizer.Tokenizer = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("token_indexers: Dict[str, allennlp.data.token_indexers.token_indexer.TokenIndexer] = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("segment_sentences: Union[bool, allennlp.data.tokenizers.sentence_splitter.SentenceSplitter] = False")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("as_text_field: bool = True")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("skip_empty_tokens: bool = False")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("max_sequence_length: int = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("max_nr_of_sentences: int = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("text_transforms: "),a("a",{attrs:{title:"biome.text.dataset_readers.text_transforms.TextTransforms",href:"text_transforms.html#biome.text.dataset_readers.text_transforms.TextTransforms"}},[e._v("TextTransforms")]),e._v(" = None")]),a("span",[e._v(",")]),e._v("\n"),a("span",[e._v(")")]),e._v("\n    ")])])])]),e._v(" "),a("dd",[a("div",{staticClass:"desc"},[a("p",[e._v("A DataSetReader as base for read instances from "),a("code",[e._v("DataSource")])]),e._v(" "),a("p",[e._v("The subclasses must implements their own way to transform input data to "),a("code",[e._v("Instance")]),e._v("\nin the text_to_field method")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("tokenizer")])])]),e._v(" "),a("dd",[e._v("By default we use a WordTokenizer with the SpacyWordSplitter")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("token_indexers")])])]),e._v(" "),a("dd",[e._v("By default we use the following dict {'tokens': SingleIdTokenIndexer}")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("segment_sentences")])])]),e._v(" "),a("dd",[e._v("If True, we will first segment the text into sentences using SpaCy and then tokenize words.")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("as_text_field")])])]),e._v(" "),a("dd",[e._v("Flag indicating how to generate the "),a("code",[e._v("TextField")]),e._v(". If enabled, the output Field\nwill be a "),a("code",[e._v("TextField")]),e._v(" with text concatenation, else the result field will be\na "),a("code",[e._v("ListField")]),e._v(" of "),a("code",[e._v("TextField")]),e._v("s, one per input data value")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("skip_empty_tokens")])])]),e._v(" "),a("dd",[e._v("Should i silently skip empty tokens?")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("max_sequence_length")])])]),e._v(" "),a("dd",[e._v("If you want to truncate the text input to a maximum number of characters")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("max_nr_of_sentences")])])]),e._v(" "),a("dd",[e._v("Use only the first max_nr_of_sentences when segmenting the text into sentences")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("text_transforms")])])]),e._v(" "),a("dd",[e._v("By default we use the as 'rm_spaces' registered class, which just removes useless, leading and trailing spaces\nfrom the text before embedding it in a "),a("code",[e._v("TextField")]),e._v(".")])])]),e._v(" "),a("h3",[e._v("Ancestors")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[e._v("allennlp.data.dataset_readers.dataset_reader.DatasetReader")]),e._v(" "),a("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),a("li",[e._v("allennlp.common.from_params.FromParams")]),e._v(" "),a("li",[a("a",{attrs:{title:"biome.text.dataset_readers.mixins.CacheableMixin",href:"mixins.html#biome.text.dataset_readers.mixins.CacheableMixin"}},[e._v("CacheableMixin")])])]),e._v(" "),a("h3",[e._v("Subclasses")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("a",{attrs:{title:"biome.text.dataset_readers.sequence_classifier_dataset_reader.SequenceClassifierReader",href:"sequence_classifier_dataset_reader.html#biome.text.dataset_readers.sequence_classifier_dataset_reader.SequenceClassifierReader"}},[e._v("SequenceClassifierReader")])]),e._v(" "),a("li",[a("a",{attrs:{title:"biome.text.dataset_readers.sequence_pair_classifier_dataset_reader.SequencePairClassifierReader",href:"sequence_pair_classifier_dataset_reader.html#biome.text.dataset_readers.sequence_pair_classifier_dataset_reader.SequencePairClassifierReader"}},[e._v("SequencePairClassifierReader")])])]),e._v(" "),a("h3",[e._v("Instance variables")]),e._v(" "),a("dl",[a("dt",{attrs:{id:"biome.text.dataset_readers.datasource_reader.DataSourceReader.signature"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("signature")]),e._v(" : dict")])]),e._v(" "),a("dd",[a("div",{staticClass:"desc"},[a("p",[e._v("Describe de input signature for the pipeline predictions")]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("pre",[a("code",[e._v("A list of expected inputs with information about if input is optional or nor.\n"),a("p",[e._v("For example, for the signature\n>>def text_to_instance(a:str,b:str, c:str=None)")]),e._v("\n"),a("p",[e._v('This method will return:\n>>{"a":{"optional": False},"b":{"optional": False},"c":{"optional": True}}\n')])])])])])]),e._v(" "),a("dl",[a("h3",{attrs:{id:"biome.text.dataset_readers.datasource_reader.DataSourceReader.build_textfield"}},[e._v("build_textfield "),a("Badge",{attrs:{text:"Method"}})],1),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("build_textfield")]),e._v(" ("),e._v("\nself,\ndata: Union[str, Iterable, dict],\n)  -> Union[allennlp.data.fields.list_field.ListField, allennlp.data.fields.text_field.TextField, NoneType]\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("div",{staticClass:"desc"},[a("p",[e._v("Embeds the record in a TextField or ListField depending on the _as_text_field parameter.")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("data")])])]),e._v(" "),a("dd",[e._v("Record to be embedded.")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("code",[e._v("field")])]),e._v(" "),a("dd",[e._v("Either a TextField or a ListField containing the record.\nReturns None if "),a("code",[e._v("data")]),e._v(" is not a str or a dict.")])])])]),e._v(" "),a("h3",{attrs:{id:"biome.text.dataset_readers.datasource_reader.DataSourceReader.text_to_instance"}},[e._v("text_to_instance "),a("Badge",{attrs:{text:"Method"}})],1),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("text_to_instance")]),e._v(" ("),e._v("\nself,\n**inputs,\n)  -> allennlp.data.instance.Instance\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("div",{staticClass:"desc"},[a("p",[e._v("Convert an input text data into a allennlp Instance")])])])]),e._v(" "),a("h3",[e._v("Inherited members")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("b",[a("a",{attrs:{title:"biome.text.dataset_readers.mixins.CacheableMixin",href:"mixins.html#biome.text.dataset_readers.mixins.CacheableMixin"}},[e._v("CacheableMixin")])])]),e._v(":\n"),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("a",{attrs:{title:"biome.text.dataset_readers.mixins.CacheableMixin.get",href:"mixins.html#biome.text.dataset_readers.mixins.CacheableMixin.get"}},[e._v("get")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.dataset_readers.mixins.CacheableMixin.set",href:"mixins.html#biome.text.dataset_readers.mixins.CacheableMixin.set"}},[e._v("set")])])])])])])])]),a("p")])}),[],!1,null,null,null);t.default=n.exports}}]);