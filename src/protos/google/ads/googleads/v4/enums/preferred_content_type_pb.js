var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.PreferredContentType",null,global),proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.displayName="proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.prototype.toObject=function(e){return proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.toObject(e,this)},proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.toObject=function(e,o){var r={};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum;return proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return e},proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.serializeBinaryToWriter=function(e,o){},proto.google.ads.googleads.v4.enums.PreferredContentTypeEnum.PreferredContentType={UNSPECIFIED:0,UNKNOWN:1,YOUTUBE_TOP_CONTENT:400},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);