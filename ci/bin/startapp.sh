#!/bin/bash

export PATH=$PATH:${PKG_BASE_DIR}/nodejs/bin

cp -Rf ${PKG_BASE_DIR}/sample-api-testing/* ${APPLICATION_JOB_DIR}/
pushd ${APPLICATION_JOB_DIR}

ls -rlt

npm start


sleep 5