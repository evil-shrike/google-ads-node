var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.ConversionActionCountingType",null,global),proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.displayName="proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum;return proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.ConversionActionCountingTypeEnum.ConversionActionCountingType={UNSPECIFIED:0,UNKNOWN:1,ONE_PER_CLICK:2,MANY_PER_CLICK:3},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);