var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.ConversionActionError",null,global),proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.displayName="proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum;return proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.ConversionActionErrorEnum.ConversionActionError={UNSPECIFIED:0,UNKNOWN:1,DUPLICATE_NAME:2,DUPLICATE_APP_ID:3,TWO_CONVERSION_ACTIONS_BIDDING_ON_SAME_APP_DOWNLOAD:4,BIDDING_ON_SAME_APP_DOWNLOAD_AS_GLOBAL_ACTION:5,DATA_DRIVEN_MODEL_WAS_NEVER_GENERATED:6,DATA_DRIVEN_MODEL_EXPIRED:7,DATA_DRIVEN_MODEL_STALE:8,DATA_DRIVEN_MODEL_UNKNOWN:9},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);