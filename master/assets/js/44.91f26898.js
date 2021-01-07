(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{445:function(t,a,e){"use strict";e.r(a);var s=e(26),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"biome-text-modules-heads-classification-classification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-modules-heads-classification-classification"}},[t._v("#")]),t._v(" biome.text.modules.heads.classification.classification "),e("Badge",{attrs:{text:"Module"}})],1),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("pre",{staticClass:"title"},[e("h2",{attrs:{id:"classificationhead"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#classificationhead"}},[t._v("#")]),t._v(" ClassificationHead "),e("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",[t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),e("span",{staticClass:"ident"},[t._v("ClassificationHead")]),t._v(" ("),t._v("\n    "),e("span",[t._v("backbone: "),e("a",{attrs:{title:"biome.text.backbone.ModelBackbone",href:"../../../backbone.html#biome.text.backbone.ModelBackbone"}},[t._v("ModelBackbone")])]),e("span",[t._v(",")]),t._v("\n    "),e("span",[t._v("labels: List[str]")]),e("span",[t._v(",")]),t._v("\n    "),e("span",[t._v("multilabel: bool = False")]),e("span",[t._v(",")]),t._v("\n"),e("span",[t._v(")")]),t._v("\n")]),t._v("\n")]),t._v(" "),e("p",[t._v("Base abstract class for classification problems")]),t._v(" "),e("p",[t._v("Initializes internal Module state, shared by both nn.Module and ScriptModule.")]),t._v(" "),e("pre",{staticClass:"title"},[e("h3",{attrs:{id:"ancestors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),e("ul",{staticClass:"hlist"},[e("li",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead"}},[t._v("TaskHead")])]),t._v(" "),e("li",[t._v("torch.nn.modules.module.Module")]),t._v(" "),e("li",[t._v("allennlp.common.registrable.Registrable")]),t._v(" "),e("li",[t._v("allennlp.common.from_params.FromParams")])]),t._v(" "),e("pre",{staticClass:"title"},[e("h3",{attrs:{id:"subclasses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subclasses"}},[t._v("#")]),t._v(" Subclasses")]),t._v("\n")]),t._v(" "),e("ul",{staticClass:"hlist"},[e("li",[e("a",{attrs:{title:"biome.text.modules.heads.classification.doc_classification.DocumentClassification",href:"doc_classification.html#biome.text.modules.heads.classification.doc_classification.DocumentClassification"}},[t._v("DocumentClassification")])]),t._v(" "),e("li",[e("a",{attrs:{title:"biome.text.modules.heads.classification.record_pair_classification.RecordPairClassification",href:"record_pair_classification.html#biome.text.modules.heads.classification.record_pair_classification.RecordPairClassification"}},[t._v("RecordPairClassification")])]),t._v(" "),e("li",[e("a",{attrs:{title:"biome.text.modules.heads.classification.text_classification.TextClassification",href:"text_classification.html#biome.text.modules.heads.classification.text_classification.TextClassification"}},[t._v("TextClassification")])])]),t._v(" "),e("dl",[e("pre",{staticClass:"title"},[e("h3",{attrs:{id:"add-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-label"}},[t._v("#")]),t._v(" add_label "),e("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),e("span",{staticClass:"ident"},[t._v("add_label")]),t._v(" ("),t._v("\n  self,\n  instance: allennlp.data.instance.Instance,\n  label: Union[List[str], List[int], str, int],\n  to_field: str = 'label',\n)  -> Union[allennlp.data.instance.Instance, NoneType]\n")]),t._v("\n")])])]),t._v(" "),e("dd",[e("p",[t._v("Includes the label field for classification into the instance data")])]),t._v(" "),e("pre",{staticClass:"title"},[e("h3",{attrs:{id:"decode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decode"}},[t._v("#")]),t._v(" decode "),e("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),e("span",{staticClass:"ident"},[t._v("decode")]),t._v(" ("),t._v("\n  self,\n  output: "),e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskOutput",href:"../task_head.html#biome.text.modules.heads.task_head.TaskOutput"}},[t._v("TaskOutput")]),t._v(",\n)  -> "),e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskOutput",href:"../task_head.html#biome.text.modules.heads.task_head.TaskOutput"}},[t._v("TaskOutput")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),e("dd",[e("p",[t._v("Completes the output for the prediction")]),t._v(" "),e("p",[t._v("Mainly adds probabilities and keys for the UI.")]),t._v(" "),e("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),e("dl",[e("dt",[e("strong",[e("code",[t._v("output")])])]),t._v(" "),e("dd",[t._v("The output from the head's forward method")])]),t._v(" "),e("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),e("dl",[e("dt",[e("code",[t._v("completed_output")])]),t._v(" "),e("dd",[t._v(" ")])])]),t._v(" "),e("pre",{staticClass:"title"},[e("h3",{attrs:{id:"get-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-metrics"}},[t._v("#")]),t._v(" get_metrics "),e("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),e("span",{staticClass:"ident"},[t._v("get_metrics")]),t._v(" ("),t._v("\n  self,\n  reset: bool = False,\n)  -> Dict[str, float]\n")]),t._v("\n")])])]),t._v(" "),e("dd",[e("p",[t._v("Get the metrics of our classifier, see :func:"),e("code",[t._v("~allennlp_2.models.Model.get_metrics")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),e("dl",[e("dt",[e("strong",[e("code",[t._v("reset")])])]),t._v(" "),e("dd",[t._v("Reset the metrics after obtaining them?")])]),t._v(" "),e("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),e("p",[t._v("A dictionary with all metric names and values.")])]),t._v(" "),e("pre",{staticClass:"title"},[e("h3",{attrs:{id:"single-label-output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-label-output"}},[t._v("#")]),t._v(" single_label_output "),e("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),e("span",{staticClass:"ident"},[t._v("single_label_output")]),t._v(" ("),t._v("\n  self,\n  logits: torch.Tensor,\n  label: Union[torch.IntTensor, NoneType] = None,\n)  -> "),e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskOutput",href:"../task_head.html#biome.text.modules.heads.task_head.TaskOutput"}},[t._v("TaskOutput")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),e("dd"),t._v(" "),e("pre",{staticClass:"title"},[e("h3",{attrs:{id:"multi-label-output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-label-output"}},[t._v("#")]),t._v(" multi_label_output "),e("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),e("span",{staticClass:"ident"},[t._v("multi_label_output")]),t._v(" ("),t._v("\n  self,\n  logits: torch.Tensor,\n  label: Union[torch.IntTensor, NoneType] = None,\n)  -> "),e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskOutput",href:"../task_head.html#biome.text.modules.heads.task_head.TaskOutput"}},[t._v("TaskOutput")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),e("dd")]),t._v(" "),e("pre",{staticClass:"title"},[e("h3",{attrs:{id:"inherited-members"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members"}},[t._v("#")]),t._v(" Inherited members")]),t._v("\n")]),t._v(" "),e("ul",{staticClass:"hlist"},[e("li",[e("code",[e("b",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead"}},[t._v("TaskHead")])])]),t._v(":\n"),e("ul",{staticClass:"hlist"},[e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.explain_prediction",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.explain_prediction"}},[t._v("explain_prediction")])])]),t._v(" "),e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.extend_labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.extend_labels"}},[t._v("extend_labels")])])]),t._v(" "),e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.featurize",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.featurize"}},[t._v("featurize")])])]),t._v(" "),e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.forward",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.forward"}},[t._v("forward")])])]),t._v(" "),e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.inputs",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.inputs"}},[t._v("inputs")])])]),t._v(" "),e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.labels"}},[t._v("labels")])])]),t._v(" "),e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.num_labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.num_labels"}},[t._v("num_labels")])])]),t._v(" "),e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.on_vocab_update",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.on_vocab_update"}},[t._v("on_vocab_update")])])]),t._v(" "),e("li",[e("code",[e("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead.register",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.register"}},[t._v("register")])])])])])])])}),[],!1,null,null,null);a.default=i.exports}}]);