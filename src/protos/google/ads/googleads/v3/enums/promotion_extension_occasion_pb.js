var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.PromotionExtensionOccasion",null,global),proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.displayName="proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum;return proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.PromotionExtensionOccasion={UNSPECIFIED:0,UNKNOWN:1,NEW_YEARS:2,CHINESE_NEW_YEAR:3,VALENTINES_DAY:4,EASTER:5,MOTHERS_DAY:6,FATHERS_DAY:7,LABOR_DAY:8,BACK_TO_SCHOOL:9,HALLOWEEN:10,BLACK_FRIDAY:11,CYBER_MONDAY:12,CHRISTMAS:13,BOXING_DAY:14,INDEPENDENCE_DAY:15,NATIONAL_DAY:16,END_OF_SEASON:17,WINTER_SALE:18,SUMMER_SALE:19,FALL_SALE:20,SPRING_SALE:21,RAMADAN:22,EID_AL_FITR:23,EID_AL_ADHA:24,SINGLES_DAY:25,WOMENS_DAY:26,HOLI:27,PARENTS_DAY:28,ST_NICHOLAS_DAY:29,CARNIVAL:30,EPIPHANY:31,ROSH_HASHANAH:32,PASSOVER:33,HANUKKAH:34,DIWALI:35,NAVRATRI:36,SONGKRAN:37,YEAR_END_GIFT:38},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);