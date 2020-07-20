"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_managed_placement_view_service_pb=require("../../../../../google/ads/googleads/v4/services/managed_placement_view_service_pb.js"),google_ads_googleads_v4_resources_managed_placement_view_pb=require("../../../../../google/ads/googleads/v4/resources/managed_placement_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_ManagedPlacementView(e){if(!(e instanceof google_ads_googleads_v4_resources_managed_placement_view_pb.ManagedPlacementView))throw new Error("Expected argument of type google.ads.googleads.v4.resources.ManagedPlacementView");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_ManagedPlacementView(e){return google_ads_googleads_v4_resources_managed_placement_view_pb.ManagedPlacementView.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetManagedPlacementViewRequest(e){if(!(e instanceof google_ads_googleads_v4_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetManagedPlacementViewRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetManagedPlacementViewRequest(e){return google_ads_googleads_v4_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest.deserializeBinary(new Uint8Array(e))}var ManagedPlacementViewServiceService=exports.ManagedPlacementViewServiceService={getManagedPlacementView:{path:"/google.ads.googleads.v4.services.ManagedPlacementViewService/GetManagedPlacementView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest,responseType:google_ads_googleads_v4_resources_managed_placement_view_pb.ManagedPlacementView,requestSerialize:serialize_google_ads_googleads_v4_services_GetManagedPlacementViewRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetManagedPlacementViewRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_ManagedPlacementView,responseDeserialize:deserialize_google_ads_googleads_v4_resources_ManagedPlacementView}};exports.ManagedPlacementViewServiceClient=grpc.makeGenericClientConstructor(ManagedPlacementViewServiceService);