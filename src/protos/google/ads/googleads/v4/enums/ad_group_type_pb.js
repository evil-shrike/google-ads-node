var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AdGroupTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.AdGroupType",null,global),proto.google.ads.googleads.v4.enums.AdGroupTypeEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.AdGroupTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.displayName="proto.google.ads.googleads.v4.enums.AdGroupTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.toObject=function(o,e){var g={};return o&&(g.$jspbMessageInstance=e),g}),proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),g=new proto.google.ads.googleads.v4.enums.AdGroupTypeEnum;return proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.deserializeBinaryFromReader(g,e)},proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.AdGroupTypeEnum.AdGroupType={UNSPECIFIED:0,UNKNOWN:1,SEARCH_STANDARD:2,DISPLAY_STANDARD:3,SHOPPING_PRODUCT_ADS:4,HOTEL_ADS:6,SHOPPING_SMART_ADS:7,VIDEO_BUMPER:8,VIDEO_TRUE_VIEW_IN_STREAM:9,VIDEO_TRUE_VIEW_IN_DISPLAY:10,VIDEO_NON_SKIPPABLE_IN_STREAM:11,VIDEO_OUTSTREAM:12,SEARCH_DYNAMIC_ADS:13,SHOPPING_COMPARISON_LISTING_ADS:14,PROMOTED_HOTEL_ADS:15,VIDEO_RESPONSIVE:16},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);