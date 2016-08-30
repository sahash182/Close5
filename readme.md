To run on local:
- clone this repo
- run npm install 
- to strat server: run node app.js
- this app will run on localhost:8080

To test this API's Please use some Rest Client Tools like PostMan or RESTClient



 Following are the Api's:

1) http://localhost:8080/api/data
- This api will get all the Items

 Test results:
  Request: http://localhost:8080/api/data
  Respond: 
  [
  {
    "id": "53fb8f26456e74467b000001",
    "loc": [
      36.166540711883776,
      -115.14080871936427
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T19:31:50.180Z"
  },
  {
    "id": "53fb8f81456e74467b000002",
    "loc": [
      36.16327763694836,
      -115.14098095792328
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": "Cup",
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-25T19:33:21.153Z"
  },
  {
    "id": "53fbb9b6456e74467b000004",
    "loc": [
      36.16852682058258,
      -115.14283594637773
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T22:33:26.282Z"
  },
  {
    "id": "53fbe21c456e74467b000006",
    "loc": [
      36.15517247887697,
      -115.14484161837342
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-26T01:25:48.754Z"
  },
  {
    "id": "53fcc82a45b6f4db35000001",
    "loc": [
      36.16857232693774,
      -115.14401662181169
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "tos",
    "createdAt": "2014-08-26T17:47:22.885Z"
  },
  {
    "id": "53fccf9945b6f4db3500000a",
    "loc": [
      36.164473114071,
      -115.14089578127711
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "BBQ",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T18:19:05.321Z"
  },
  {
    "id": "53fcf20e646d8f233e000006",
    "loc": [
      36.16622315108078,
      -115.14207467773902
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "How do we get on this?",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T20:46:06.044Z"
  },
  {
    "id": "53fd1182646d8f233e000014",
    "loc": [
      36.164421694636836,
      -115.13950549880684
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:00:18.800Z"
  },
  {
    "id": "53fd1e48646d8f233e00001b",
    "loc": [
      36.16557524696486,
      -115.14206979649131
    ],
    "userId": "53fd1d5f646d8f233e000015",
    "description": "Markers NOT previously chomped on.",
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:54:48.754Z"
  }
]
************************************************************************************************

2)http://localhost:8080/api/data/date/desc
- This will get all Items that will be sorted by dates in descending order.

Test Results:
Request:http://localhost:8080/api/data/date/desc
Respond:
[
  {
    "id": "53fd1e48646d8f233e00001b",
    "loc": [
      36.16557524696486,
      -115.14206979649131
    ],
    "userId": "53fd1d5f646d8f233e000015",
    "description": "Markers NOT previously chomped on.",
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:54:48.754Z"
  },
  {
    "id": "53fd1182646d8f233e000014",
    "loc": [
      36.164421694636836,
      -115.13950549880684
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:00:18.800Z"
  },
  {
    "id": "53fcf20e646d8f233e000006",
    "loc": [
      36.16622315108078,
      -115.14207467773902
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "How do we get on this?",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T20:46:06.044Z"
  },
  {
    "id": "53fccf9945b6f4db3500000a",
    "loc": [
      36.164473114071,
      -115.14089578127711
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "BBQ",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T18:19:05.321Z"
  },
  {
    "id": "53fcc82a45b6f4db35000001",
    "loc": [
      36.16857232693774,
      -115.14401662181169
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "tos",
    "createdAt": "2014-08-26T17:47:22.885Z"
  },
  {
    "id": "53fbe21c456e74467b000006",
    "loc": [
      36.15517247887697,
      -115.14484161837342
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-26T01:25:48.754Z"
  },
  {
    "id": "53fbb9b6456e74467b000004",
    "loc": [
      36.16852682058258,
      -115.14283594637773
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T22:33:26.282Z"
  },
  {
    "id": "53fb8f81456e74467b000002",
    "loc": [
      36.16327763694836,
      -115.14098095792328
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": "Cup",
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-25T19:33:21.153Z"
  },
  {
    "id": "53fb8f26456e74467b000001",
    "loc": [
      36.166540711883776,
      -115.14080871936427
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T19:31:50.180Z"
  }
]

************************************************************************************************

3)http://localhost:8080/api/data/date/asc
- This will get all Items that will be sorted by dates in ascending order.
Test Results:
Request:http://localhost:8080/api/data/date/asc
Respond:
[
  {
    "id": "53fb8f26456e74467b000001",
    "loc": [
      36.166540711883776,
      -115.14080871936427
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T19:31:50.180Z"
  },
  {
    "id": "53fb8f81456e74467b000002",
    "loc": [
      36.16327763694836,
      -115.14098095792328
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": "Cup",
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-25T19:33:21.153Z"
  },
  {
    "id": "53fbb9b6456e74467b000004",
    "loc": [
      36.16852682058258,
      -115.14283594637773
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T22:33:26.282Z"
  },
  {
    "id": "53fbe21c456e74467b000006",
    "loc": [
      36.15517247887697,
      -115.14484161837342
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-26T01:25:48.754Z"
  },
  {
    "id": "53fcc82a45b6f4db35000001",
    "loc": [
      36.16857232693774,
      -115.14401662181169
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "tos",
    "createdAt": "2014-08-26T17:47:22.885Z"
  },
  {
    "id": "53fccf9945b6f4db3500000a",
    "loc": [
      36.164473114071,
      -115.14089578127711
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "BBQ",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T18:19:05.321Z"
  },
  {
    "id": "53fcf20e646d8f233e000006",
    "loc": [
      36.16622315108078,
      -115.14207467773902
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "How do we get on this?",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T20:46:06.044Z"
  },
  {
    "id": "53fd1182646d8f233e000014",
    "loc": [
      36.164421694636836,
      -115.13950549880684
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:00:18.800Z"
  },
  {
    "id": "53fd1e48646d8f233e00001b",
    "loc": [
      36.16557524696486,
      -115.14206979649131
    ],
    "userId": "53fd1d5f646d8f233e000015",
    "description": "Markers NOT previously chomped on.",
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:54:48.754Z"
  }
]

************************************************************************************************

4)http://localhost:8080/api/data/price/desc
- This will get all Items that will be sorted by price in descending order.
Test Results:
Request:http://localhost:8080/api/data/price/desc
Respond:
[
  {
    "id": "53fb8f81456e74467b000002",
    "loc": [
      36.16327763694836,
      -115.14098095792328
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": "Cup",
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-25T19:33:21.153Z"
  },
  {
    "id": "53fbe21c456e74467b000006",
    "loc": [
      36.15517247887697,
      -115.14484161837342
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-26T01:25:48.754Z"
  },
  {
    "id": "53fccf9945b6f4db3500000a",
    "loc": [
      36.164473114071,
      -115.14089578127711
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "BBQ",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T18:19:05.321Z"
  },
  {
    "id": "53fcf20e646d8f233e000006",
    "loc": [
      36.16622315108078,
      -115.14207467773902
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "How do we get on this?",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T20:46:06.044Z"
  },
  {
    "id": "53fb8f26456e74467b000001",
    "loc": [
      36.166540711883776,
      -115.14080871936427
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T19:31:50.180Z"
  },
  {
    "id": "53fbb9b6456e74467b000004",
    "loc": [
      36.16852682058258,
      -115.14283594637773
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T22:33:26.282Z"
  },
  {
    "id": "53fcc82a45b6f4db35000001",
    "loc": [
      36.16857232693774,
      -115.14401662181169
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "tos",
    "createdAt": "2014-08-26T17:47:22.885Z"
  },
  {
    "id": "53fd1182646d8f233e000014",
    "loc": [
      36.164421694636836,
      -115.13950549880684
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:00:18.800Z"
  },
  {
    "id": "53fd1e48646d8f233e00001b",
    "loc": [
      36.16557524696486,
      -115.14206979649131
    ],
    "userId": "53fd1d5f646d8f233e000015",
    "description": "Markers NOT previously chomped on.",
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:54:48.754Z"
  }
]

************************************************************************************************

5)http://localhost:8080/api/data/price/asc
- This will get all Items that will be sorted by price in ascending order.
Test Results:
Request:http://localhost:8080/api/data/price/asc
Respond:
[
  {
    "id": "53fb8f26456e74467b000001",
    "loc": [
      36.166540711883776,
      -115.14080871936427
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T19:31:50.180Z"
  },
  {
    "id": "53fbb9b6456e74467b000004",
    "loc": [
      36.16852682058258,
      -115.14283594637773
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T22:33:26.282Z"
  },
  {
    "id": "53fcc82a45b6f4db35000001",
    "loc": [
      36.16857232693774,
      -115.14401662181169
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "tos",
    "createdAt": "2014-08-26T17:47:22.885Z"
  },
  {
    "id": "53fd1182646d8f233e000014",
    "loc": [
      36.164421694636836,
      -115.13950549880684
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:00:18.800Z"
  },
  {
    "id": "53fd1e48646d8f233e00001b",
    "loc": [
      36.16557524696486,
      -115.14206979649131
    ],
    "userId": "53fd1d5f646d8f233e000015",
    "description": "Markers NOT previously chomped on.",
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:54:48.754Z"
  },
  {
    "id": "53fccf9945b6f4db3500000a",
    "loc": [
      36.164473114071,
      -115.14089578127711
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "BBQ",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T18:19:05.321Z"
  },
  {
    "id": "53fcf20e646d8f233e000006",
    "loc": [
      36.16622315108078,
      -115.14207467773902
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "How do we get on this?",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T20:46:06.044Z"
  },
  {
    "id": "53fb8f81456e74467b000002",
    "loc": [
      36.16327763694836,
      -115.14098095792328
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": "Cup",
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-25T19:33:21.153Z"
  },
  {
    "id": "53fbe21c456e74467b000006",
    "loc": [
      36.15517247887697,
      -115.14484161837342
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-26T01:25:48.754Z"
  }
]

************************************************************************************************

6)http://localhost:8080/api/data/id/53fd1182646d8f233e000014
- This will get all Items that can be find by id.

Test Results: On taking one id from the given data
Request:http://localhost:8080/api/data/id/53fd1182646d8f233e000014
Respond:
{
  "id": "53fd1182646d8f233e000014",
  "loc": [
    36.164421694636836,
    -115.13950549880684
  ],
  "userId": "53f6c9c96d1944af0b00000b",
  "description": null,
  "price": -1,
  "status": "removed",
  "createdAt": "2014-08-26T23:00:18.800Z"
}
************************************************************************************************

7)http://localhost:8080/api/data/user/53f6c9c96d1944af0b00000b
- This will get all Items that can be find by userId.
Test Results: on taking one userId from the data
Request:http://localhost:8080/api/data/user/53f6c9c96d1944af0b00000b
Respond:
[
  {
    "id": "53fb8f26456e74467b000001",
    "loc": [
      36.166540711883776,
      -115.14080871936427
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T19:31:50.180Z"
  },
  {
    "id": "53fb8f81456e74467b000002",
    "loc": [
      36.16327763694836,
      -115.14098095792328
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": "Cup",
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-25T19:33:21.153Z"
  },
  {
    "id": "53fbb9b6456e74467b000004",
    "loc": [
      36.16852682058258,
      -115.14283594637773
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T22:33:26.282Z"
  },
  {
    "id": "53fbe21c456e74467b000006",
    "loc": [
      36.15517247887697,
      -115.14484161837342
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-26T01:25:48.754Z"
  },
  {
    "id": "53fcc82a45b6f4db35000001",
    "loc": [
      36.16857232693774,
      -115.14401662181169
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "tos",
    "createdAt": "2014-08-26T17:47:22.885Z"
  },
  {
    "id": "53fd1182646d8f233e000014",
    "loc": [
      36.164421694636836,
      -115.13950549880684
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:00:18.800Z"
  }
]
************************************************************************************************

8)http://localhost:8080/api/data/location/36.15517247887697/-115.14484161837342
- This will get all Items that is less than or equal to 50 miles of the radius for the given location co-ordinates. Which is supposed to be the requestor's location. For this case I used, latitude = 36.15517247887697 and longitude = -115.14484161837342.

Test Results:

Request: http://localhost:8080/api/data/location/36.15517247887697/-115.14484161837342

Response:
[
  {
    "id": "53fb8f26456e74467b000001",
    "loc": [
      36.166540711883776,
      -115.14080871936427
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T19:31:50.180Z"
  },
  {
    "id": "53fb8f81456e74467b000002",
    "loc": [
      36.16327763694836,
      -115.14098095792328
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": "Cup",
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-25T19:33:21.153Z"
  },
  {
    "id": "53fbb9b6456e74467b000004",
    "loc": [
      36.16852682058258,
      -115.14283594637773
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-25T22:33:26.282Z"
  },
  {
    "id": "53fbe21c456e74467b000006",
    "loc": [
      36.15517247887697,
      -115.14484161837342
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": 20,
    "status": "removed",
    "createdAt": "2014-08-26T01:25:48.754Z"
  },
  {
    "id": "53fcc82a45b6f4db35000001",
    "loc": [
      36.16857232693774,
      -115.14401662181169
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "tos",
    "createdAt": "2014-08-26T17:47:22.885Z"
  },
  {
    "id": "53fccf9945b6f4db3500000a",
    "loc": [
      36.164473114071,
      -115.14089578127711
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "BBQ",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T18:19:05.321Z"
  },
  {
    "id": "53fcf20e646d8f233e000006",
    "loc": [
      36.16622315108078,
      -115.14207467773902
    ],
    "userId": "53fccf7545b6f4db35000007",
    "description": "How do we get on this?",
    "price": 0,
    "status": "tos",
    "createdAt": "2014-08-26T20:46:06.044Z"
  },
  {
    "id": "53fd1182646d8f233e000014",
    "loc": [
      36.164421694636836,
      -115.13950549880684
    ],
    "userId": "53f6c9c96d1944af0b00000b",
    "description": null,
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:00:18.800Z"
  },
  {
    "id": "53fd1e48646d8f233e00001b",
    "loc": [
      36.16557524696486,
      -115.14206979649131
    ],
    "userId": "53fd1d5f646d8f233e000015",
    "description": "Markers NOT previously chomped on.",
    "price": -1,
    "status": "removed",
    "createdAt": "2014-08-26T23:54:48.754Z"
  }
]

************************************************************************************************



