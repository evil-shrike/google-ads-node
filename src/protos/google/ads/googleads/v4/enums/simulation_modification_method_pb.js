var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.SimulationModificationMethod",null,global),proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.displayName="proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.toObject=function(o,i){var e={};return o&&(e.$jspbMessageInstance=i),e}),proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.deserializeBinary=function(o){var i=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum;return proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.deserializeBinaryFromReader(e,i)},proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.deserializeBinaryFromReader=function(o,i){for(;i.nextField()&&!i.isEndGroup();){i.getFieldNumber();i.skipField()}return o},proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.serializeBinaryToWriter=function(o,i){},proto.google.ads.googleads.v4.enums.SimulationModificationMethodEnum.SimulationModificationMethod={UNSPECIFIED:0,UNKNOWN:1,UNIFORM:2,DEFAULT:3},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);