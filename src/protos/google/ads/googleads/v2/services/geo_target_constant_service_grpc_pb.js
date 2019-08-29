"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_geo_target_constant_service_pb=require("../../../../../google/ads/googleads/v2/services/geo_target_constant_service_pb.js"),google_ads_googleads_v2_resources_geo_target_constant_pb=require("../../../../../google/ads/googleads/v2/resources/geo_target_constant_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_GeoTargetConstant(arg){if(!(arg instanceof google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant))throw new Error("Expected argument of type google.ads.googleads.v2.resources.GeoTargetConstant");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_GeoTargetConstant(buffer_arg){return google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetGeoTargetConstantRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetGeoTargetConstantRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetGeoTargetConstantRequest(buffer_arg){return google_ads_googleads_v2_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_SuggestGeoTargetConstantsRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.SuggestGeoTargetConstantsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_SuggestGeoTargetConstantsRequest(buffer_arg){return google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_SuggestGeoTargetConstantsResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.SuggestGeoTargetConstantsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_SuggestGeoTargetConstantsResponse(buffer_arg){return google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var GeoTargetConstantServiceService=exports.GeoTargetConstantServiceService={getGeoTargetConstant:{path:"/google.ads.googleads.v2.services.GeoTargetConstantService/GetGeoTargetConstant",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest,responseType:google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant,requestSerialize:serialize_google_ads_googleads_v2_services_GetGeoTargetConstantRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetGeoTargetConstantRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_GeoTargetConstant,responseDeserialize:deserialize_google_ads_googleads_v2_resources_GeoTargetConstant},suggestGeoTargetConstants:{path:"/google.ads.googleads.v2.services.GeoTargetConstantService/SuggestGeoTargetConstants",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest,responseType:google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse,requestSerialize:serialize_google_ads_googleads_v2_services_SuggestGeoTargetConstantsRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_SuggestGeoTargetConstantsRequest,responseSerialize:serialize_google_ads_googleads_v2_services_SuggestGeoTargetConstantsResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_SuggestGeoTargetConstantsResponse}};exports.GeoTargetConstantServiceClient=grpc.makeGenericClientConstructor(GeoTargetConstantServiceService);