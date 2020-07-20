"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_media_file_service_pb=require("../../../../../google/ads/googleads/v4/services/media_file_service_pb.js"),google_ads_googleads_v4_resources_media_file_pb=require("../../../../../google/ads/googleads/v4/resources/media_file_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_resources_MediaFile(e){if(!(e instanceof google_ads_googleads_v4_resources_media_file_pb.MediaFile))throw new Error("Expected argument of type google.ads.googleads.v4.resources.MediaFile");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_MediaFile(e){return google_ads_googleads_v4_resources_media_file_pb.MediaFile.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetMediaFileRequest(e){if(!(e instanceof google_ads_googleads_v4_services_media_file_service_pb.GetMediaFileRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetMediaFileRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetMediaFileRequest(e){return google_ads_googleads_v4_services_media_file_service_pb.GetMediaFileRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateMediaFilesRequest(e){if(!(e instanceof google_ads_googleads_v4_services_media_file_service_pb.MutateMediaFilesRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateMediaFilesRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateMediaFilesRequest(e){return google_ads_googleads_v4_services_media_file_service_pb.MutateMediaFilesRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateMediaFilesResponse(e){if(!(e instanceof google_ads_googleads_v4_services_media_file_service_pb.MutateMediaFilesResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateMediaFilesResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateMediaFilesResponse(e){return google_ads_googleads_v4_services_media_file_service_pb.MutateMediaFilesResponse.deserializeBinary(new Uint8Array(e))}var MediaFileServiceService=exports.MediaFileServiceService={getMediaFile:{path:"/google.ads.googleads.v4.services.MediaFileService/GetMediaFile",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_media_file_service_pb.GetMediaFileRequest,responseType:google_ads_googleads_v4_resources_media_file_pb.MediaFile,requestSerialize:serialize_google_ads_googleads_v4_services_GetMediaFileRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetMediaFileRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_MediaFile,responseDeserialize:deserialize_google_ads_googleads_v4_resources_MediaFile},mutateMediaFiles:{path:"/google.ads.googleads.v4.services.MediaFileService/MutateMediaFiles",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_media_file_service_pb.MutateMediaFilesRequest,responseType:google_ads_googleads_v4_services_media_file_service_pb.MutateMediaFilesResponse,requestSerialize:serialize_google_ads_googleads_v4_services_MutateMediaFilesRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_MutateMediaFilesRequest,responseSerialize:serialize_google_ads_googleads_v4_services_MutateMediaFilesResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_MutateMediaFilesResponse}};exports.MediaFileServiceClient=grpc.makeGenericClientConstructor(MediaFileServiceService);