var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.ManagerLinkError",null,global),proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.displayName="proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum;return proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.ManagerLinkErrorEnum.ManagerLinkError={UNSPECIFIED:0,UNKNOWN:1,ACCOUNTS_NOT_COMPATIBLE_FOR_LINKING:2,TOO_MANY_MANAGERS:3,TOO_MANY_INVITES:4,ALREADY_INVITED_BY_THIS_MANAGER:5,ALREADY_MANAGED_BY_THIS_MANAGER:6,ALREADY_MANAGED_IN_HIERARCHY:7,DUPLICATE_CHILD_FOUND:8,CLIENT_HAS_NO_ADMIN_USER:9,MAX_DEPTH_EXCEEDED:10,CYCLE_NOT_ALLOWED:11,TOO_MANY_ACCOUNTS:12,TOO_MANY_ACCOUNTS_AT_MANAGER:13,NON_OWNER_USER_CANNOT_MODIFY_LINK:14,SUSPENDED_ACCOUNT_CANNOT_ADD_CLIENTS:15},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);