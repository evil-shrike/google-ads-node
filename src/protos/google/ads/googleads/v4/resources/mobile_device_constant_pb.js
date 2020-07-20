var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_mobile_device_type_pb=require("../../../../../google/ads/googleads/v4/enums/mobile_device_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_mobile_device_type_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.MobileDeviceConstant",null,global),proto.google.ads.googleads.v4.resources.MobileDeviceConstant=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.MobileDeviceConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.MobileDeviceConstant.displayName="proto.google.ads.googleads.v4.resources.MobileDeviceConstant"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.MobileDeviceConstant.toObject(e,this)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.toObject=function(e,o){var r,t={resourceName:jspb.Message.getFieldWithDefault(o,1,""),id:(r=o.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),name:(r=o.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),manufacturerName:(r=o.getManufacturerName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),operatingSystemName:(r=o.getOperatingSystemName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),type:jspb.Message.getFieldWithDefault(o,6,0)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.resources.MobileDeviceConstant.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.MobileDeviceConstant;return proto.google.ads.googleads.v4.resources.MobileDeviceConstant.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setId(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setName(r);break;case 4:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setManufacturerName(r);break;case 5:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setOperatingSystemName(r);break;case 6:r=o.readEnum();e.setType(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.MobileDeviceConstant.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getId())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getName())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getManufacturerName())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getOperatingSystemName())&&o.writeMessage(5,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(r=e.getType())&&o.writeEnum(6,r)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.setId=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.setName=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.clearName=function(){return this.setName(void 0)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.getManufacturerName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.setManufacturerName=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.clearManufacturerName=function(){return this.setManufacturerName(void 0)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.hasManufacturerName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.getOperatingSystemName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.setOperatingSystemName=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.clearOperatingSystemName=function(){return this.setOperatingSystemName(void 0)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.hasOperatingSystemName=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v4.resources.MobileDeviceConstant.prototype.setType=function(e){return jspb.Message.setProto3EnumField(this,6,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);