(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{416:function(e,t,s){"use strict";s.r(t);var a=s(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"biome-text-modules-encoders-time-distributed-encoder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-modules-encoders-time-distributed-encoder"}},[e._v("#")]),e._v(" biome.text.modules.encoders.time_distributed_encoder "),s("Badge",{attrs:{text:"Module"}})],1),e._v(" "),s("div"),e._v(" "),s("div"),e._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"timedistributedencoder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timedistributedencoder"}},[e._v("#")]),e._v(" TimeDistributedEncoder "),s("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("TimeDistributedEncoder")]),e._v(" (encoder: allennlp.modules.seq2seq_encoders.seq2seq_encoder.Seq2SeqEncoder)"),e._v("\n")]),e._v("\n")]),e._v(" "),s("p",[e._v("Wraps a Seq2SeqEncoder into a TimeDistributed module and implements the Seq2SeqEncoder API")]),e._v(" "),s("p",[e._v("Initializes internal Module state, shared by both nn.Module and ScriptModule.")]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),s("ul",{staticClass:"hlist"},[s("li",[e._v("allennlp.modules.seq2seq_encoders.seq2seq_encoder.Seq2SeqEncoder")]),e._v(" "),s("li",[e._v("allennlp.modules.encoder_base._EncoderBase")]),e._v(" "),s("li",[e._v("torch.nn.modules.module.Module")]),e._v(" "),s("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),s("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"forward"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#forward"}},[e._v("#")]),e._v(" forward "),s("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("forward")]),e._v(" ("),e._v("\n  self,\n  *input,\n  **inputs,\n)  -> Callable[..., Any]\n")]),e._v("\n")])])]),e._v(" "),s("dd",[s("p",[e._v("Defines the computation performed at every call.")]),e._v(" "),s("p",[e._v("Should be overridden by all subclasses.")]),e._v(" "),s("div",{staticClass:"admonition note"},[s("p",{staticClass:"admonition-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Although the recipe for forward pass needs to be defined within\nthis function, one should call the :class:"),s("code",[e._v("Module")]),e._v(" instance afterwards\ninstead of this since the former takes care of running the\nregistered hooks while the latter silently ignores them.")])])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"is-bidirectional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#is-bidirectional"}},[e._v("#")]),e._v(" is_bidirectional "),s("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("is_bidirectional")]),e._v("("),s("span",[e._v("self) -> bool")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),s("dd",[s("p",[e._v("Returns "),s("code",[e._v("True")]),e._v(" if this encoder is bidirectional.\nIf so, we assume the forward direction\nof the encoder is the first half of the final dimension, and the backward direction is the\nsecond half.")])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"get-output-dim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-output-dim"}},[e._v("#")]),e._v(" get_output_dim "),s("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("get_output_dim")]),e._v("("),s("span",[e._v("self) -> int")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),s("dd",[s("p",[e._v("Returns the dimension of each vector in the sequence output by this "),s("code",[e._v("Seq2SeqEncoder")]),e._v(".\nThis is "),s("code",[e._v("not")]),e._v(" the shape of the returned tensor, but the last element of that shape.")])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"get-input-dim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-input-dim"}},[e._v("#")]),e._v(" get_input_dim "),s("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("get_input_dim")]),e._v("("),s("span",[e._v("self)")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),s("dd",[s("p",[e._v("Returns the dimension of the vector input for each element in the sequence input\nto a "),s("code",[e._v("Seq2SeqEncoder")]),e._v(". This is "),s("code",[e._v("not")]),e._v(" the shape of the input tensor, but the\nlast element of that shape.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);