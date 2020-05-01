(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{414:function(e,s,i){"use strict";i.r(s);var t=i(33),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"biome-text-models-sequence-pair-classifier"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-models-sequence-pair-classifier"}},[e._v("#")]),e._v(" biome.text.models.sequence_pair_classifier "),i("Badge",{attrs:{text:"Module"}})],1),e._v(" "),i("dl",[i("h2",{attrs:{id:"biome.text.models.sequence_pair_classifier.SequencePairClassifier"}},[e._v("SequencePairClassifier "),i("Badge",{attrs:{text:"Class"}})],1),e._v(" "),i("dt",[i("div",{staticClass:"language-python extra-class"},[i("pre",{staticClass:"language-python"},[e._v("    "),i("code",[e._v("\n"),i("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),i("span",{staticClass:"ident"},[e._v("SequencePairClassifier")]),e._v(" ("),e._v("\n    "),i("span",[e._v("vocab: allennlp.data.vocabulary.Vocabulary")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("text_field_embedder: allennlp.modules.text_field_embedders.text_field_embedder.TextFieldEmbedder")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("seq2vec_encoder: allennlp.modules.seq2vec_encoders.seq2vec_encoder.Seq2VecEncoder")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("seq2seq_encoder: Union[allennlp.modules.seq2seq_encoders.seq2seq_encoder.Seq2SeqEncoder, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("multifield_seq2seq_encoder: Union[allennlp.modules.seq2seq_encoders.seq2seq_encoder.Seq2SeqEncoder, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("multifield_seq2vec_encoder: Union[allennlp.modules.seq2vec_encoders.seq2vec_encoder.Seq2VecEncoder, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("feed_forward: Union[allennlp.modules.feedforward.FeedForward, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("dropout: Union[float, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("multifield_dropout: Union[float, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("initializer: Union[allennlp.nn.initializers.InitializerApplicator, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("regularizer: Union[allennlp.nn.regularizers.regularizer_applicator.RegularizerApplicator, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("accuracy: Union[allennlp.training.metrics.categorical_accuracy.CategoricalAccuracy, NoneType] = None")]),i("span",[e._v(",")]),e._v("\n    "),i("span",[e._v("loss_weights: Dict[str, float] = None")]),i("span",[e._v(",")]),e._v("\n"),i("span",[e._v(")")]),e._v("\n    ")])])])]),e._v(" "),i("dd",[i("div",{staticClass:"desc"},[i("p",[e._v("This "),i("code",[i("a",{attrs:{title:"biome.text.models.sequence_pair_classifier.SequencePairClassifier",href:"#biome.text.models.sequence_pair_classifier.SequencePairClassifier"}},[e._v("SequencePairClassifier")])]),e._v(" uses a siamese network architecture to perform a classification task between a pair\nof records or documents.")]),e._v(" "),i("p",[e._v("The classifier can be configured to take into account the hierarchical structure of documents\nand multi-field records.")]),e._v(" "),i("p",[e._v("A record/document can be (1) single-field (single sentence): composed of a sequence of\ntokens, or (2) multi-field (multi-sentence): a sequence of fields with each of the fields containing a sequence of\ntokens. In the case of multi-field a doc_seq2vec_encoder and optionally a doc_seq2seq_encoder should be configured,\nfor encoding each of the fields into a single vector encoding the full record/doc must be configured.")]),e._v(" "),i("p",[e._v("The sequences are encoded into two single vectors, the resulting vectors are concatenated and fed to a\nlinear classification layer.")]),e._v(" "),i("p",[e._v("Initializes internal Module state, shared by both nn.Module and ScriptModule.")])]),e._v(" "),i("h3",[e._v("Ancestors")]),e._v(" "),i("ul",{staticClass:"hlist"},[i("li",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase"}},[e._v("SequenceClassifierBase")])]),e._v(" "),i("li",[i("a",{attrs:{title:"biome.text.models.mixins.BiomeClassifierMixin",href:"mixins.html#biome.text.models.mixins.BiomeClassifierMixin"}},[e._v("BiomeClassifierMixin")])]),e._v(" "),i("li",[e._v("allennlp.models.model.Model")]),e._v(" "),i("li",[e._v("torch.nn.modules.module.Module")]),e._v(" "),i("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),i("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),i("dl",[i("h3",{attrs:{id:"biome.text.models.sequence_pair_classifier.SequencePairClassifier.forward"}},[e._v("forward "),i("Badge",{attrs:{text:"Method"}})],1),e._v(" "),i("dt",[i("div",{staticClass:"language-python extra-class"},[i("pre",{staticClass:"language-python"},[i("code",[e._v("\n"),i("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),i("span",{staticClass:"ident"},[e._v("forward")]),e._v(" ("),e._v("\n   self,\n   record1: Dict[str, torch.Tensor],\n   record2: Dict[str, torch.Tensor],\n   label: torch.Tensor = None,\n)  -> Dict[str, torch.Tensor]\n")]),e._v("\n        ")])])]),e._v(" "),i("dd",[i("div",{staticClass:"desc"},[i("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),i("dl",[i("dt",[i("strong",[i("code",[e._v("record1")])])]),e._v(" "),i("dd",[e._v("The first input tokens.\nThe dictionary is the output of a "),i("code",[e._v("TextField.as_array()")]),e._v(". It gives names to the tensors created by\nthe "),i("code",[e._v("TokenIndexer")]),e._v("s.\nIn its most basic form, using a "),i("code",[e._v("SingleIdTokenIndexer")]),e._v(", the dictionary is composed of:\n"),i("code",[e._v('{"tokens": Tensor(batch_size, num_tokens)}')]),e._v(".\nThe keys of the dictionary are defined in the "),i("code",[e._v("model.yml")]),e._v(" input.\nThe dictionary is designed to be passed on directly to a "),i("code",[e._v("TextFieldEmbedder")]),e._v(", that has a\n"),i("code",[e._v("TokenEmbedder")]),e._v(" for each key in the dictionary (except you set "),i("code",[e._v("allow_unmatched_keys")]),e._v(" in the\n"),i("code",[e._v("TextFieldEmbedder")]),e._v(" to False) and knows how to combine different word/character representations into a\nsingle vector per token in your input.")]),e._v(" "),i("dt",[i("strong",[i("code",[e._v("record2")])])]),e._v(" "),i("dd",[e._v("The second input tokens.")]),e._v(" "),i("dt",[i("strong",[i("code",[e._v("label")])]),e._v(" : "),i("code",[e._v("torch.LongTensor")]),e._v(", optional "),i("code",[e._v("(default = None)")])]),e._v(" "),i("dd",[e._v("A torch tensor representing the sequence of integer gold class label of shape\n"),i("code",[e._v("(batch_size, num_classes)")]),e._v(".")])]),e._v(" "),i("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),i("dl",[i("dt",[i("code",[e._v("An output dictionary consisting of:")])]),e._v(" "),i("dd",[e._v(" ")]),e._v(" "),i("dt",[i("strong",[i("code",[e._v("logits")])]),e._v(" : "),i("code",[e._v("torch.FloatTensor")])]),e._v(" "),i("dd",[e._v("A tensor of shape "),i("code",[e._v("(batch_size, num_tokens, tag_vocab_size)")]),e._v(" representing\nunnormalised log probabilities of the tag classes.")]),e._v(" "),i("dt",[i("strong",[i("code",[e._v("class_probabilities")])]),e._v(" : "),i("code",[e._v("torch.FloatTensor")])]),e._v(" "),i("dd",[e._v("A tensor of shape "),i("code",[e._v("(batch_size, num_tokens, tag_vocab_size)")]),e._v(" representing\na distribution of the tag classes per word.")]),e._v(" "),i("dt",[i("strong",[i("code",[e._v("loss")])]),e._v(" : "),i("code",[e._v("torch.FloatTensor")]),e._v(", optional")]),e._v(" "),i("dd",[e._v("A scalar loss to be optimised.")])])])])]),e._v(" "),i("h3",[e._v("Inherited members")]),e._v(" "),i("ul",{staticClass:"hlist"},[i("li",[i("code",[i("b",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase"}},[e._v("SequenceClassifierBase")])])]),e._v(":\n"),i("ul",{staticClass:"hlist"},[i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.decode",href:"mixins.html#biome.text.models.mixins.BiomeClassifierMixin.decode"}},[e._v("decode")])])]),e._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.extend_labels",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase.extend_labels"}},[e._v("extend_labels")])])]),e._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.forward_tokens",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase.forward_tokens"}},[e._v("forward_tokens")])])]),e._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.get_metrics",href:"mixins.html#biome.text.models.mixins.BiomeClassifierMixin.get_metrics"}},[e._v("get_metrics")])])]),e._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.label_for_index",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase.label_for_index"}},[e._v("label_for_index")])])]),e._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.n_inputs",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase.n_inputs"}},[e._v("n_inputs")])])]),e._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.num_classes",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase.num_classes"}},[e._v("num_classes")])])]),e._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.output_classes",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase.output_classes"}},[e._v("output_classes")])])]),e._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase.output_layer",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase.output_layer"}},[e._v("output_layer")])])])])])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);