(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{410:function(e,t,s){"use strict";s.r(t);var i=s(33),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"biome-text-models-mixins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-models-mixins"}},[e._v("#")]),e._v(" biome.text.models.mixins "),s("Badge",{attrs:{text:"Module"}})],1),e._v(" "),s("dl",[s("h2",{attrs:{id:"biome.text.models.mixins.BiomeClassifierMixin"}},[e._v("BiomeClassifierMixin "),s("Badge",{attrs:{text:"Class"}})],1),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[e._v("    "),s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("BiomeClassifierMixin")]),e._v(" ("),e._v("\n    "),s("span",[e._v("vocab")]),s("span",[e._v(",")]),e._v("\n    "),s("span",[e._v("accuracy: Union[allennlp.training.metrics.categorical_accuracy.CategoricalAccuracy, NoneType] = None")]),s("span",[e._v(",")]),e._v("\n    "),s("span",[e._v("**kwargs")]),s("span",[e._v(",")]),e._v("\n"),s("span",[e._v(")")]),e._v("\n    ")])])])]),e._v(" "),s("dd",[s("div",{staticClass:"desc"},[s("p",[e._v("A mixin class for biome classifiers.")]),e._v(" "),s("p",[e._v("Inheriting from this class allows you to use Biome's awesome UIs.\nIt standardizes the "),s("code",[e._v("decode")]),e._v(" and "),s("code",[e._v("get_metrics")]),e._v(' methods.\nSome stuff to be aware of:\n- make sure your forward\'s output_dict has a "class_probability" key\n- use the '),s("code",[e._v("_biome_classifier_metrics")]),e._v(" dict in the forward method to record the metrics\n- the forward signature must be compatible with the text_to_instance method of your DataReader\n- the "),s("code",[e._v("decode")]),e._v(" and "),s("code",[e._v("get_metrics")]),e._v(" methods override the allennlp.models.model.Model methods")]),e._v(" "),s("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("vocab")])])]),e._v(" "),s("dd",[e._v("Used to initiate the F1 measures for each label. It is also passed on to the model.")]),e._v(" "),s("dt",[s("strong",[s("code",[e._v("accuracy")])])]),e._v(" "),s("dd",[e._v("The accuracy you want to use. By default, we choose a categorical top-1 accuracy.")]),e._v(" "),s("dt",[s("strong",[s("code",[e._v("kwargs")])])]),e._v(" "),s("dd",[e._v("Passed on to the model class init")])]),e._v(" "),s("h2",{attrs:{id:"examples"}},[e._v("Examples")]),e._v(" "),s("p",[e._v("An example of how to implement an AllenNLP model in biome-text to be able to use Biome's UIs:")]),e._v(" "),s("pre",[s("code",{staticClass:"python"},[e._v('>>> from allennlp.models.bert_for_classification import BertForClassification\n>>>\n>>> @Model.register("biome_bert_classifier")\n>>> class BiomeBertClassifier(BiomeClassifierMixin, BertForClassification):\n>>>     def __init__(self, vocab, bert_model, num_labels, index, label_namespace,\n>>>                  trainable, initializer, regularizer, accuracy):\n>>>         super().__init__(accuracy=accuracy, vocab=vocab, bert_model=bert_model, num_labels=num_labels,\n>>>                          index=index, label_namespace=label_namespace, trainable=trainable,\n>>>                          initializer=initializer, regularizer=regularizer)\n>>>\n>>>     @overrides\n>>>     def forward(self, tokens, label = None):\n>>>         output_dict = super().forward(tokens=tokens, label=label)\n>>>         output_dict["class_probabilities"] = output_dict.pop("probs")\n>>>         if label is not None:\n>>>             for metric in self._biome_classifier_metrics.values():\n>>>                 metric(logits, label)\n>>>         return output_dict\n')])])]),e._v(" "),s("h3",[e._v("Subclasses")]),e._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.models.biome_bimpm.BiomeBiMpm",href:"biome_bimpm.html#biome.text.models.biome_bimpm.BiomeBiMpm"}},[e._v("BiomeBiMpm")])]),e._v(" "),s("li",[s("a",{attrs:{title:"biome.text.models.multifield_bimpm.MultifieldBiMpm",href:"multifield_bimpm.html#biome.text.models.multifield_bimpm.MultifieldBiMpm"}},[e._v("MultifieldBiMpm")])]),e._v(" "),s("li",[s("a",{attrs:{title:"biome.text.models.sequence_classifier_base.SequenceClassifierBase",href:"sequence_classifier_base.html#biome.text.models.sequence_classifier_base.SequenceClassifierBase"}},[e._v("SequenceClassifierBase")])])]),e._v(" "),s("dl",[s("h3",{attrs:{id:"biome.text.models.mixins.BiomeClassifierMixin.decode"}},[e._v("decode "),s("Badge",{attrs:{text:"Method"}})],1),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("decode")]),e._v(" ("),e._v("\n   self,\n   output_dict: Dict[str, torch.Tensor],\n)  -> Dict[str, torch.Tensor]\n")]),e._v("\n        ")])])]),e._v(" "),s("dd",[s("div",{staticClass:"desc"},[s("p",[e._v("Does a simple position-wise argmax over each token, converts indices to string labels, and\nadds a "),s("code",[e._v('"tags"')]),e._v(" key to the dictionary with the result.")])])]),e._v(" "),s("h3",{attrs:{id:"biome.text.models.mixins.BiomeClassifierMixin.get_metrics"}},[e._v("get_metrics "),s("Badge",{attrs:{text:"Method"}})],1),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("get_metrics")]),e._v(" ("),e._v("\n   self,\n   reset: bool = False,\n)  -> Dict[str, float]\n")]),e._v("\n        ")])])]),e._v(" "),s("dd",[s("div",{staticClass:"desc"},[s("p",[e._v("Get the metrics of our classifier, see :func:"),s("code",[e._v("~allennlp_2.models.Model.get_metrics")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("reset")])])]),e._v(" "),s("dd",[e._v("Reset the metrics after obtaining them?")])]),e._v(" "),s("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),s("p",[e._v("A dictionary with all metric names and values.")])])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);