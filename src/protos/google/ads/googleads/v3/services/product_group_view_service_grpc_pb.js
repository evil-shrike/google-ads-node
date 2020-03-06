"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_product_group_view_service_pb=require("../../../../../google/ads/googleads/v3/services/product_group_view_service_pb.js"),google_ads_googleads_v3_resources_product_group_view_pb=require("../../../../../google/ads/googleads/v3/resources/product_group_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");function serialize_google_ads_googleads_v3_resources_ProductGroupView(arg){if(!(arg instanceof google_ads_googleads_v3_resources_product_group_view_pb.ProductGroupView))throw new Error("Expected argument of type google.ads.googleads.v3.resources.ProductGroupView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_ProductGroupView(buffer_arg){return google_ads_googleads_v3_resources_product_group_view_pb.ProductGroupView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetProductGroupViewRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_product_group_view_service_pb.GetProductGroupViewRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetProductGroupViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetProductGroupViewRequest(buffer_arg){return google_ads_googleads_v3_services_product_group_view_service_pb.GetProductGroupViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var ProductGroupViewServiceService=exports.ProductGroupViewServiceService={getProductGroupView:{path:"/google.ads.googleads.v3.services.ProductGroupViewService/GetProductGroupView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_product_group_view_service_pb.GetProductGroupViewRequest,responseType:google_ads_googleads_v3_resources_product_group_view_pb.ProductGroupView,requestSerialize:serialize_google_ads_googleads_v3_services_GetProductGroupViewRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetProductGroupViewRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_ProductGroupView,responseDeserialize:deserialize_google_ads_googleads_v3_resources_ProductGroupView}};exports.ProductGroupViewServiceClient=grpc.makeGenericClientConstructor(ProductGroupViewServiceService);