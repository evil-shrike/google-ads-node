var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.ConversionLagBucket",null,global),proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.displayName="proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.toObject=function(o,e){var n={};return o&&(n.$jspbMessageInstance=e),n}),proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),n=new proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum;return proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.deserializeBinaryFromReader(n,e)},proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.ConversionLagBucketEnum.ConversionLagBucket={UNSPECIFIED:0,UNKNOWN:1,LESS_THAN_ONE_DAY:2,ONE_TO_TWO_DAYS:3,TWO_TO_THREE_DAYS:4,THREE_TO_FOUR_DAYS:5,FOUR_TO_FIVE_DAYS:6,FIVE_TO_SIX_DAYS:7,SIX_TO_SEVEN_DAYS:8,SEVEN_TO_EIGHT_DAYS:9,EIGHT_TO_NINE_DAYS:10,NINE_TO_TEN_DAYS:11,TEN_TO_ELEVEN_DAYS:12,ELEVEN_TO_TWELVE_DAYS:13,TWELVE_TO_THIRTEEN_DAYS:14,THIRTEEN_TO_FOURTEEN_DAYS:15,FOURTEEN_TO_TWENTY_ONE_DAYS:16,TWENTY_ONE_TO_THIRTY_DAYS:17,THIRTY_TO_FORTY_FIVE_DAYS:18,FORTY_FIVE_TO_SIXTY_DAYS:19,SIXTY_TO_NINETY_DAYS:20},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);