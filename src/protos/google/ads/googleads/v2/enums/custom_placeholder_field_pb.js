var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.CustomPlaceholderField",null,global),proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum;return proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.CustomPlaceholderFieldEnum.CustomPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,ID:2,ID2:3,ITEM_TITLE:4,ITEM_SUBTITLE:5,ITEM_DESCRIPTION:6,ITEM_ADDRESS:7,PRICE:8,FORMATTED_PRICE:9,SALE_PRICE:10,FORMATTED_SALE_PRICE:11,IMAGE_URL:12,ITEM_CATEGORY:13,FINAL_URLS:14,FINAL_MOBILE_URLS:15,TRACKING_URL:16,CONTEXTUAL_KEYWORDS:17,ANDROID_APP_LINK:18,SIMILAR_IDS:19,IOS_APP_LINK:20,IOS_APP_STORE_ID:21},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);