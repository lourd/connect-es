// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-web v0.0.8 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/repository_commit.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import {GetRepositoryCommitByReferenceRequest, GetRepositoryCommitByReferenceResponse, GetRepositoryCommitBySequenceIdRequest, GetRepositoryCommitBySequenceIdResponse, ListRepositoryCommitsByBranchRequest, ListRepositoryCommitsByBranchResponse, ListRepositoryCommitsByReferenceRequest, ListRepositoryCommitsByReferenceResponse} from "./repository_commit_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * RepositoryCommitService is the Repository commit service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.RepositoryCommitService
 */
export const RepositoryCommitService = {
  typeName: "buf.alpha.registry.v1alpha1.RepositoryCommitService",
  methods: {
    /**
     * ListRepositoryCommitsByBranch lists the repository commits associated
     * with a repository branch on a repository, ordered by their create time.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryCommitService.ListRepositoryCommitsByBranch
     */
    listRepositoryCommitsByBranch: {
      name: "ListRepositoryCommitsByBranch",
      I: ListRepositoryCommitsByBranchRequest,
      O: ListRepositoryCommitsByBranchResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListRepositoryCommitsByReference returns repository commits up-to and including
     * the provided reference.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryCommitService.ListRepositoryCommitsByReference
     */
    listRepositoryCommitsByReference: {
      name: "ListRepositoryCommitsByReference",
      I: ListRepositoryCommitsByReferenceRequest,
      O: ListRepositoryCommitsByReferenceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetRepositoryCommitByReference returns the repository commit matching
     * the provided reference, if it exists.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryCommitService.GetRepositoryCommitByReference
     */
    getRepositoryCommitByReference: {
      name: "GetRepositoryCommitByReference",
      I: GetRepositoryCommitByReferenceRequest,
      O: GetRepositoryCommitByReferenceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetRepositoryCommitBySequenceId returns the repository commit matching
     * the provided sequence ID and branch, if it exists.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryCommitService.GetRepositoryCommitBySequenceId
     */
    getRepositoryCommitBySequenceId: {
      name: "GetRepositoryCommitBySequenceId",
      I: GetRepositoryCommitBySequenceIdRequest,
      O: GetRepositoryCommitBySequenceIdResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

