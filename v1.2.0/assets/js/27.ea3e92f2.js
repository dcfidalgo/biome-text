(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{437:function(t,e,s){"use strict";s.r(e);var a=s(26),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"biome-text-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-features"}},[t._v("#")]),t._v(" biome.text.features "),s("Badge",{attrs:{text:"Module"}})],1),t._v(" "),s("div"),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("Features")]),t._v(" ()"),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("All features used in the pipeline configuration inherit from this abstract class.")]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[t._v("abc.ABC")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"subclasses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subclasses"}},[t._v("#")]),t._v(" Subclasses")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.features.CharFeatures",href:"#biome.text.features.CharFeatures"}},[t._v("CharFeatures")])]),t._v(" "),s("li",[s("a",{attrs:{title:"biome.text.features.TransformersFeatures",href:"#biome.text.features.TransformersFeatures"}},[t._v("TransformersFeatures")])]),t._v(" "),s("li",[s("a",{attrs:{title:"biome.text.features.WordFeatures",href:"#biome.text.features.WordFeatures"}},[t._v("WordFeatures")])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"instance-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables"}},[t._v("#")]),t._v(" Instance variables")]),t._v("\n")]),t._v(" "),s("dl",[s("dt",{attrs:{id:"biome.text.features.Features.config"}},[s("code",{staticClass:"name"},[t._v("var "),s("span",{staticClass:"ident"},[t._v("config")])])]),t._v(" "),s("dd")]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"to-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-json"}},[t._v("#")]),t._v(" to_json "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("to_json")]),t._v("("),s("span",[t._v("self)")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd")]),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"wordfeatures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wordfeatures"}},[t._v("#")]),t._v(" WordFeatures "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("WordFeatures")]),t._v(" ("),t._v("\n    "),s("span",[t._v("embedding_dim: int")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("lowercase_tokens: bool = False")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("trainable: bool = True")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("weights_file: Union[str, NoneType] = None")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("**extra_params")]),s("span",[t._v(",")]),t._v("\n"),s("span",[t._v(")")]),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("Feature configuration at word level")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("embedding_dim")])])]),t._v(" "),s("dd",[t._v("Dimension of the embeddings")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("lowercase_tokens")])])]),t._v(" "),s("dd",[t._v("If True, lowercase tokens before the indexing")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("trainable")])])]),t._v(" "),s("dd",[t._v("If False, freeze the embeddings")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("weights_file")])])]),t._v(" "),s("dd",[t._v("Path to a file with pretrained weights for the embedding")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("**extra_params")])])]),t._v(" "),s("dd",[t._v("Extra parameters passed on to the "),s("code",[t._v("indexer")]),t._v(" and "),s("code",[t._v("embedder")]),t._v(" of the AllenNLP configuration framework.\nFor example: "),s("code",[t._v('WordFeatures(embedding_dim=300, embedder={"padding_index": 0})')])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-2"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.features.Features",href:"#biome.text.features.Features"}},[t._v("Features")])]),t._v(" "),s("li",[t._v("abc.ABC")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"instance-variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables-2"}},[t._v("#")]),t._v(" Instance variables")]),t._v("\n")]),t._v(" "),s("dl",[s("dt",{attrs:{id:"biome.text.features.WordFeatures.config"}},[s("code",{staticClass:"name"},[t._v("var "),s("span",{staticClass:"ident"},[t._v("config")]),t._v(" : Dict")])]),t._v(" "),s("dd",[s("p",[t._v("Returns the config in AllenNLP format")])])]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"to-json-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-json-2"}},[t._v("#")]),t._v(" to_json "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("to_json")]),t._v("("),s("span",[t._v("self) -> Dict")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Returns the config as dict for the serialized json config file")])])]),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"charfeatures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charfeatures"}},[t._v("#")]),t._v(" CharFeatures "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("CharFeatures")]),t._v(" ("),t._v("\n    "),s("span",[t._v("embedding_dim: int")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("encoder: Dict[str, Any]")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("dropout: float = 0.0")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("lowercase_characters: bool = False")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("**extra_params")]),s("span",[t._v(",")]),t._v("\n"),s("span",[t._v(")")]),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("Feature configuration at character level")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("embedding_dim")])])]),t._v(" "),s("dd",[t._v("Dimension of the character embeddings.")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("encoder")])])]),t._v(" "),s("dd",[t._v("A sequence to vector encoder resulting in a word representation based on its characters")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("dropout")])])]),t._v(" "),s("dd",[t._v("Dropout applied to the output of the encoder")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("lowercase_characters")])])]),t._v(" "),s("dd",[t._v("If True, lowercase characters before the indexing")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("**extra_params")])])]),t._v(" "),s("dd",[t._v("Extra parameters passed on to the "),s("code",[t._v("indexer")]),t._v(" and "),s("code",[t._v("embedder")]),t._v(" of the AllenNLP configuration framework.\nFor example: "),s("code",[t._v('CharFeatures(embedding_dim=32, indexer={"min_padding_length": 5}, ...)')])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-3"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.features.Features",href:"#biome.text.features.Features"}},[t._v("Features")])]),t._v(" "),s("li",[t._v("abc.ABC")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"instance-variables-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables-3"}},[t._v("#")]),t._v(" Instance variables")]),t._v("\n")]),t._v(" "),s("dl",[s("dt",{attrs:{id:"biome.text.features.CharFeatures.config"}},[s("code",{staticClass:"name"},[t._v("var "),s("span",{staticClass:"ident"},[t._v("config")]),t._v(" : Dict")])]),t._v(" "),s("dd",[s("p",[t._v("Returns the config in AllenNLP format")])])]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"to-json-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-json-3"}},[t._v("#")]),t._v(" to_json "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("to_json")]),t._v("("),s("span",[t._v("self)")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Returns the config as dict for the serialized json config file")])])]),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"transformersfeatures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transformersfeatures"}},[t._v("#")]),t._v(" TransformersFeatures "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("TransformersFeatures")]),t._v(" ("),t._v("\n    "),s("span",[t._v("model_name: str")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("trainable: bool = False")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("max_length: Union[int, NoneType] = None")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("last_layer_only: bool = True")]),s("span",[t._v(",")]),t._v("\n"),s("span",[t._v(")")]),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("Configuration of the feature extracted with the "),s("a",{attrs:{href:"https://huggingface.co/models"}},[t._v("transformers models")]),t._v(".")]),t._v(" "),s("p",[t._v('We use AllenNLPs "mismatched" indexer and embedder to get word-level representations.\nMost of the transformers models work with word-piece tokenizers.')]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("model_name")])])]),t._v(" "),s("dd",[t._v("Name of one of the "),s("a",{attrs:{href:"https://huggingface.co/models"}},[t._v("transformers models")]),t._v(".")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("trainable")])])]),t._v(" "),s("dd",[t._v("If false, freeze the transformer weights")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("max_length")])])]),t._v(" "),s("dd",[t._v("If positive, split the document into segments of this many tokens (including special tokens)\nbefore feeding into the embedder. The embedder embeds these segments independently and\nconcatenate the results to get the original document representation.")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("last_layer_only")])])]),t._v(" "),s("dd",[t._v("When "),s("code",[t._v("True")]),t._v(", only the final layer of the pretrained transformer is taken\nfor the embeddings. But if set to "),s("code",[t._v("False")]),t._v(", a scalar mix of all of the layers\nis used.")])]),t._v(" "),s("h2",{attrs:{id:"attributes"}},[t._v("Attributes")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("mismatched")])]),t._v(" : "),s("code",[t._v("bool (default: True)")])]),t._v(" "),s("dd",[t._v("If true, we will sum up the word-piece vectors in a word to pull out a single vector for each word.\nIf you use a transformers tokenizer, this is automatically set to False by the "),s("code",[t._v("PipelineConfiguration")]),t._v(".")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-4"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.features.Features",href:"#biome.text.features.Features"}},[t._v("Features")])]),t._v(" "),s("li",[t._v("abc.ABC")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"instance-variables-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables-4"}},[t._v("#")]),t._v(" Instance variables")]),t._v("\n")]),t._v(" "),s("dl",[s("dt",{attrs:{id:"biome.text.features.TransformersFeatures.config"}},[s("code",{staticClass:"name"},[t._v("var "),s("span",{staticClass:"ident"},[t._v("config")]),t._v(" : Dict")])]),t._v(" "),s("dd",[s("p",[t._v("Returns the config in AllenNLP format")])])]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"to-json-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-json-4"}},[t._v("#")]),t._v(" to_json "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("to_json")]),t._v("("),s("span",[t._v("self) -> Dict")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Returns the config as dict for the serialized json config file")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);