(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{382:function(e,t,a){"use strict";a.r(t);var i=a(26),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"biome-text-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-pipeline"}},[e._v("#")]),e._v(" biome.text.pipeline "),a("Badge",{attrs:{text:"Module"}})],1),e._v(" "),a("div"),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipeline"}},[e._v("#")]),e._v(" Pipeline "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("Pipeline")]),e._v(" ()"),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("Manages NLP models configuration and actions.")]),e._v(" "),a("p",[e._v("Use "),a("code",[a("a",{attrs:{title:"biome.text.pipeline.Pipeline",href:"#biome.text.pipeline.Pipeline"}},[e._v("Pipeline")])]),e._v(" for creating new models from a configuration or loading a pre-trained model.")]),e._v(" "),a("p",[e._v("Use instantiated Pipelines for training from scratch, fine-tuning, predicting, serving, or exploring predictions.")]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"subclasses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subclasses"}},[e._v("#")]),e._v(" Subclasses")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[e._v("biome.text.pipeline._BlankPipeline")]),e._v(" "),a("li",[e._v("biome.text.pipeline._PreTrainedPipeline")])]),e._v(" "),a("dl",[a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"from-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-yaml"}},[e._v("#")]),e._v(" from_yaml "),a("Badge",{attrs:{text:"Static method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("from_yaml")]),e._v(" ("),e._v("\n  path: str,\n  vocab_path: Union[str, NoneType] = None,\n)  -> "),a("a",{attrs:{title:"biome.text.pipeline.Pipeline",href:"#biome.text.pipeline.Pipeline"}},[e._v("Pipeline")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Creates a pipeline from a config yaml file path")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("path")])]),e._v(" : "),a("code",[e._v("str")])]),e._v(" "),a("dd",[e._v("The path to a YAML configuration file")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("vocab_path")])]),e._v(" : "),a("code",[e._v("Optional[str]")])]),e._v(" "),a("dd",[e._v("If provided, the pipeline vocab will be loaded from this path")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("pipeline")])]),e._v(" : "),a("code",[a("a",{attrs:{title:"biome.text.pipeline.Pipeline",href:"#biome.text.pipeline.Pipeline"}},[e._v("Pipeline")])])]),e._v(" "),a("dd",[e._v("A configured pipeline")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"from-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-config"}},[e._v("#")]),e._v(" from_config "),a("Badge",{attrs:{text:"Static method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("from_config")]),e._v(" ("),e._v("\n  config: Union[str, biome.text.configuration.PipelineConfiguration],\n  vocab_path: Union[str, NoneType] = None,\n)  -> "),a("a",{attrs:{title:"biome.text.pipeline.Pipeline",href:"#biome.text.pipeline.Pipeline"}},[e._v("Pipeline")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Creates a pipeline from a "),a("code",[e._v("PipelineConfiguration")]),e._v(" object")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("config")])]),e._v(" : "),a("code",[e._v("Union[str, PipelineConfiguration]")])]),e._v(" "),a("dd",[e._v("A "),a("code",[e._v("PipelineConfiguration")]),e._v(" object or a YAML "),a("code",[e._v("str")]),e._v(" for the pipeline configuration")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("vocab_path")])]),e._v(" : "),a("code",[e._v("Optional[str]")])]),e._v(" "),a("dd",[e._v("If provided, the pipeline vocab will be loaded from this path")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("pipeline")])]),e._v(" : "),a("code",[a("a",{attrs:{title:"biome.text.pipeline.Pipeline",href:"#biome.text.pipeline.Pipeline"}},[e._v("Pipeline")])])]),e._v(" "),a("dd",[e._v("A configured pipeline")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"from-pretrained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-pretrained"}},[e._v("#")]),e._v(" from_pretrained "),a("Badge",{attrs:{text:"Static method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("from_pretrained")]),e._v(" ("),e._v("\n  path: str,\n  **kwargs,\n)  -> "),a("a",{attrs:{title:"biome.text.pipeline.Pipeline",href:"#biome.text.pipeline.Pipeline"}},[e._v("Pipeline")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Loads a pipeline from a pre-trained pipeline from a model.tar.gz file path")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("pre",[a("code",[e._v('path: <code>str</code>\n    The path to the model.tar.gz file of a pre-trained <code><a title="biome.text.pipeline.Pipeline" href="#biome.text.pipeline.Pipeline">Pipeline</a></code>\n')])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("pre",[a("code",[e._v('pipeline: <code><a title="biome.text.pipeline.Pipeline" href="#biome.text.pipeline.Pipeline">Pipeline</a></code>\n    A configured pipeline\n')])])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"instance-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables"}},[e._v("#")]),e._v(" Instance variables")]),e._v("\n")]),e._v(" "),a("dl",[a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.name"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("name")])])]),e._v(" "),a("dd",[a("p",[e._v("Gets pipeline\nname")])]),e._v(" "),a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.inputs"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("inputs")]),e._v(" : List[str]")])]),e._v(" "),a("dd",[a("p",[e._v("Gets pipeline input field names")])]),e._v(" "),a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.output"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("output")]),e._v(" : str")])]),e._v(" "),a("dd",[a("p",[e._v("Gets pipeline output field names")])]),e._v(" "),a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.backbone"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("backbone")]),e._v(" : "),a("a",{attrs:{title:"biome.text.backbone.ModelBackbone",href:"backbone.html#biome.text.backbone.ModelBackbone"}},[e._v("ModelBackbone")])])]),e._v(" "),a("dd",[a("p",[e._v("Gets pipeline backbone encoder")])]),e._v(" "),a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.head"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("head")]),e._v(" : "),a("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead",href:"modules/heads/task_head.html#biome.text.modules.heads.task_head.TaskHead"}},[e._v("TaskHead")])])]),e._v(" "),a("dd",[a("p",[e._v("Gets pipeline task head")])]),e._v(" "),a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.config"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("config")]),e._v(" : "),a("a",{attrs:{title:"biome.text.configuration.PipelineConfiguration",href:"configuration.html#biome.text.configuration.PipelineConfiguration"}},[e._v("PipelineConfiguration")])])]),e._v(" "),a("dd"),e._v(" "),a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.type_name"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("type_name")]),e._v(" : str")])]),e._v(" "),a("dd",[a("p",[e._v("The pipeline name. Equivalent to task head name")])]),e._v(" "),a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.trainable_parameters"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("trainable_parameters")]),e._v(" : int")])]),e._v(" "),a("dd",[a("p",[e._v("Return the number of trainable parameters.")]),e._v(" "),a("p",[e._v("This number could be change before an after a training process, since trainer could fix some of them.")])]),e._v(" "),a("dt",{attrs:{id:"biome.text.pipeline.Pipeline.trainable_parameter_names"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("trainable_parameter_names")]),e._v(" : List[str]")])]),e._v(" "),a("dd",[a("p",[e._v("Returns the name of pipeline trainable parameters")])])]),e._v(" "),a("dl",[a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"init-prediction-logger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-prediction-logger"}},[e._v("#")]),e._v(" init_prediction_logger "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("init_prediction_logger")]),e._v(" ("),e._v("\n  self,\n  output_dir: str,\n  max_logging_size: int = 100,\n) \n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Initialize the prediction logging.")]),e._v(" "),a("p",[e._v("If initialized, all predictions will be logged to a file called "),a("em",[e._v("predictions.json")]),e._v(" in the "),a("code",[e._v("output_dir")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("output_dir")])]),e._v(" : "),a("code",[e._v("str")])]),e._v(" "),a("dd",[e._v("Path to the folder in which we create the "),a("em",[e._v("predictions.json")]),e._v(" file.")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("max_logging_size")])]),e._v(" : "),a("code",[e._v("int")])]),e._v(" "),a("dd",[e._v("Max disk size to use for prediction logs")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"init-prediction-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-prediction-cache"}},[e._v("#")]),e._v(" init_prediction_cache "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("init_prediction_cache")]),e._v(" ("),e._v("\n  self,\n  max_size: int,\n)  -> NoneType\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Initialize cache for input predictions")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("max_size")])])]),e._v(" "),a("dd",[e._v("Save up to max_size most recent (inputs).")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"train"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#train"}},[e._v("#")]),e._v(" train "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("train")]),e._v(" ("),e._v("\n  self,\n  output: str,\n  trainer: "),a("a",{attrs:{title:"biome.text.configuration.TrainerConfiguration",href:"configuration.html#biome.text.configuration.TrainerConfiguration"}},[e._v("TrainerConfiguration")]),e._v(",\n  training: str,\n  validation: Union[str, NoneType] = None,\n  test: Union[str, NoneType] = None,\n  extend_vocab: Union[biome.text.configuration.VocabularyConfiguration, NoneType] = None,\n  restore: bool = False,\n)  -> NoneType\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Launches a training run with the specified configurations and datasources")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("output")])]),e._v(" : "),a("code",[e._v("str")])]),e._v(" "),a("dd",[e._v("The experiment output path")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("trainer")])]),e._v(" : "),a("code",[e._v("str")])]),e._v(" "),a("dd",[e._v("The trainer file path")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("training")])]),e._v(" : "),a("code",[e._v("str")])]),e._v(" "),a("dd",[e._v("The train datasource file path")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("validation")])]),e._v(" : "),a("code",[e._v("Optional[str]")])]),e._v(" "),a("dd",[e._v("The validation datasource file path")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("test")])]),e._v(" : "),a("code",[e._v("Optional[str]")])]),e._v(" "),a("dd",[e._v("The test datasource file path")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("extend_vocab")])]),e._v(" : "),a("code",[e._v("Optional[VocabularyConfiguration]")])]),e._v(" "),a("dd",[e._v("Extends vocab tokens with provided configuration")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("restore")])]),e._v(" : "),a("code",[e._v("bool")])]),e._v(" "),a("dd",[e._v("If enabled, tries to read previous training status from output folder and\ncontinues training process from it")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"predict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#predict"}},[e._v("#")]),e._v(" predict "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("predict")]),e._v(" ("),e._v("\n  self,\n  *args,\n  **kwargs,\n)  -> Dict[str, numpy.ndarray]\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Predicts over some input data with current state of the model")]),e._v(" "),a("p",[e._v("The accepted input is dynamically calculated from head.input")]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("predictions")])]),e._v(" : "),a("code",[e._v("Dict[str, numpy.ndarray]")])]),e._v(" "),a("dd",[e._v("A dictionary containing the predictions and additional information")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"explain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain"}},[e._v("#")]),e._v(" explain "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("explain")]),e._v(" ("),e._v("\n  self,\n  *args,\n  **kwargs,\n)  -> Dict[str, Any]\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Predicts over some input data with current state of the model and provides explanations of token importance.")]),e._v(" "),a("p",[e._v("The accepted input is dynamically calculated from head.input")]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("predictions")])]),e._v(" : "),a("code",[e._v("Dict[str, numpy.ndarray]")])]),e._v(" "),a("dd",[e._v("A dictionary containing the predictions with token importance calculated using IntegratedGradients")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"save-vocabulary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-vocabulary"}},[e._v("#")]),e._v(" save_vocabulary "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("save_vocabulary")]),e._v(" ("),e._v("\n  self,\n  path: str,\n)  -> NoneType\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Save the pipeline vocabulary into a path")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"create-vocabulary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-vocabulary"}},[e._v("#")]),e._v(" create_vocabulary "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("create_vocabulary")]),e._v(" ("),e._v("\n  self,\n  config: "),a("a",{attrs:{title:"biome.text.configuration.VocabularyConfiguration",href:"configuration.html#biome.text.configuration.VocabularyConfiguration"}},[e._v("VocabularyConfiguration")]),e._v(",\n)  -> NoneType\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Creates a vocabulary an set it to pipeline")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"explore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explore"}},[e._v("#")]),e._v(" explore "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("explore")]),e._v(" ("),e._v("\n  self,\n  ds_path: str,\n  explore_id: Union[str, NoneType] = None,\n  es_host: Union[str, NoneType] = None,\n  batch_size: int = 500,\n  prediction_cache_size: int = 0,\n  explain: bool = False,\n  force_delete: bool = True,\n  **metadata,\n)  -> dask.dataframe.core.DataFrame\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Launches Explore UI for a given datasource with current model")]),e._v(" "),a("p",[e._v("Running this method inside a an "),a("code",[e._v("IPython")]),e._v(" notebook will try to render the UI directly in the notebook.")]),e._v(" "),a("p",[e._v("Running this outside a notebook will try to launch the standalone web application.")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("pre",[a("code",[e._v("ds_path: <code>str</code>\n    The path to the configuration of a datasource\nexplore_id: <code>Optional\\[str]</code>\n    A name or id for this explore run, useful for running and keep track of several explorations\nes_host: <code>Optional\\[str]</code>\n    The URL to the Elasticsearch host for indexing predictions (default is `localhost:9200`)\nbatch_size: <code>int</code>\n    The batch size for indexing predictions (default is `500)\nprediction_cache_size: <code>int</code>\n    The size of the cache for caching predictions (default is `0)\nexplain: <code>bool</code>\n    Whether to extract and return explanations of token importance (default is <code>False</code>)\nforce_delete: <code>bool</code>\n    Deletes exploration with the same <code>explore\\_id</code> before indexing the new explore items (default is `True)\n")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("pre",[a("code",[e._v('pipeline: <code><a title="biome.text.pipeline.Pipeline" href="#biome.text.pipeline.Pipeline">Pipeline</a></code>\n    A configured pipeline\n')])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"serve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serve"}},[e._v("#")]),e._v(" serve "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("serve")]),e._v(" ("),e._v("\n  self,\n  port: int = 9998,\n) \n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Launches a REST prediction service with current model in a specified port (default is `9998)")]),e._v(" "),a("h1",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("pre",[a("code",[e._v("port: <code>int</code>\n    The port to make available the prediction service\n")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"set-head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-head"}},[e._v("#")]),e._v(" set_head "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("set_head")]),e._v(" ("),e._v("\n  self,\n  type: Type["),a("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead",href:"modules/heads/task_head.html#biome.text.modules.heads.task_head.TaskHead"}},[e._v("TaskHead")]),e._v("],\n  **params,\n) \n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Sets a new task head for the pipeline")]),e._v(" "),a("p",[e._v("Use this to reuse the weights and config of a pre-trained model (e.g., language model) for a new task.")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("type")])]),e._v(" : "),a("code",[e._v("Type[TaskHead]")])]),e._v(" "),a("dd",[e._v("The "),a("code",[e._v("TaskHead")]),e._v(" class to be set for the pipeline (e.g., "),a("code",[e._v("TextClassification")])]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("params")])]),e._v(" : "),a("code",[e._v("**kwargs")])]),e._v(" "),a("dd",[e._v("The "),a("code",[e._v("TaskHead")]),e._v(" specific parameters (e.g., classification head needs a "),a("code",[e._v("pooler")]),e._v(" layer)")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);