var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_payments_account_pb=require("../../../../../google/ads/googleads/v3/resources/payments_account_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse",null,global),proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.displayName="proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest;return proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getCustomerId()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.ListPaymentsAccountsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.displayName="proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse"),proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.toObject=function(includeInstance,msg){var obj={paymentsAccountsList:jspb.Message.toObjectList(msg.getPaymentsAccountsList(),google_ads_googleads_v3_resources_payments_account_pb.PaymentsAccount.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse;return proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_ads_googleads_v3_resources_payments_account_pb.PaymentsAccount;reader.readMessage(value,google_ads_googleads_v3_resources_payments_account_pb.PaymentsAccount.deserializeBinaryFromReader),msg.addPaymentsAccounts(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getPaymentsAccountsList()).length&&writer.writeRepeatedMessage(1,f,google_ads_googleads_v3_resources_payments_account_pb.PaymentsAccount.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.prototype.getPaymentsAccountsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v3_resources_payments_account_pb.PaymentsAccount,1)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.prototype.setPaymentsAccountsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.prototype.addPaymentsAccounts=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.ads.googleads.v3.resources.PaymentsAccount,opt_index)},proto.google.ads.googleads.v3.services.ListPaymentsAccountsResponse.prototype.clearPaymentsAccountsList=function(){this.setPaymentsAccountsList([])},goog.object.extend(exports,proto.google.ads.googleads.v3.services);