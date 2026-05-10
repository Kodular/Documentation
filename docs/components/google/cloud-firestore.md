# Cloud Firestore

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that provides access to Google Cloud Firestore for storing and retrieving structured data in real-time.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Batch Committed

Triggered when a batch has been committed successfully. 'operationCount' is the number of operations that were committed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Batch%20Committed%22,%20%22param%22:%20%5B%22operationCount%22%5D%7D"></div>

| Param | Type |
|--------|------|
|operationCount|<span class="chip chip-number">Number</span>|

### Collection Changed

Triggered when any document in a listened collection or query changes. 'documents' is the full current result set.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Collection%20Changed%22,%20%22param%22:%20%5B%22tag%22,%20%22collectionPath%22,%20%22documents%22%5D%7D"></div>

| Param | Type |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|collectionPath|<span class="chip chip-text">Text</span>|
|documents|<span class="chip chip-list">List</span>|

### Document Added

Triggered when a document has been successfully added. 'documentId' is the auto-generated ID.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Document%20Added%22,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Document Changed

Triggered when a listened document changes. 'exists' is false if the document was deleted, in which case 'data' is empty.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Document%20Changed%22,%20%22param%22:%20%5B%22tag%22,%20%22collectionPath%22,%20%22documentId%22,%20%22data%22,%20%22exists%22%5D%7D"></div>

| Param | Type |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|
|exists|<span class="chip chip-boolean">Boolean</span>|

### Document Deleted

Triggered when a document has been successfully deleted.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Document%20Deleted%22,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Document Set

Triggered when a document has been successfully set.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Document%20Set%22,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Document Updated

Triggered when a document has been successfully updated.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Document%20Updated%22,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Firestore Error

Triggered when a Firestore operation fails. 'operation' identifies what failed (e.g., GetDocument, QueryRun). 'message' contains the error details.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Firestore%20Error%22,%20%22param%22:%20%5B%22operation%22,%20%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|operation|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Got Document

Triggered when a document has been successfully read. 'data' is a dictionary of the document fields. Empty dictionary if document doesn't exist.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Got%20Document%22,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22,%20%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|

### Got Document Exists

Triggered with the result of a document existence check.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Got%20Document%20Exists%22,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22,%20%22exists%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|exists|<span class="chip chip-boolean">Boolean</span>|

### Got Documents

Triggered when a collection query returns results. 'documents' is a list of dictionaries, each with an '_id' field for the document ID.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Got%20Documents%22,%20%22param%22:%20%5B%22collectionPath%22,%20%22documents%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documents|<span class="chip chip-list">List</span>|

### Listener Error

Triggered when a real-time listener encounters an error.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Listener%20Error%22,%20%22param%22:%20%5B%22tag%22,%20%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Transaction Completed

Triggered when a transaction completes successfully.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Transaction%20Completed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Transaction Failed

Triggered when a transaction fails.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Transaction%20Failed%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Transaction Ready

Triggered inside a transaction. Perform all reads (TransactionGet) and writes (TransactionSet, TransactionUpdate, TransactionDelete) here.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Transaction%20Ready%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Add Document

Creates a document with an auto-generated ID. Fires DocumentAdded with the generated ID on success or FirestoreError on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Add%20Document%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|

### Batch Commit

Commits all queued batch operations atomically. Fires BatchCommitted on success or FirestoreError on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Batch%20Commit%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Batch Create

Creates a new batch for atomic writes. Replaces any existing uncommitted batch.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Batch%20Create%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Batch Delete

Queues a delete operation on the current batch.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Batch%20Delete%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Batch Set

Queues a set operation on the current batch.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Batch%20Set%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22,%20%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|

### Batch Update

Queues an update operation on the current batch.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Batch%20Update%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22,%20%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|

### Delete Document

Deletes a document. Fires DocumentDeleted on success or FirestoreError on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Delete%20Document%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Document Exists

Checks if a document exists. Fires GotDocumentExists on success or FirestoreError on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Document%20Exists%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Get All Documents

Gets all documents in a collection with no filters. Fires GotDocuments on success or FirestoreError on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Get%20All%20Documents%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|

### Get Document

Reads a single document from the given collection. Fires GotDocument on success or FirestoreError on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Get%20Document%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Is Listening

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns whether a listener with the given tag is active.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Is%20Listening%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22tag%22%5D%7D"></div>

| Param | Type |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|

### Listen To Collection

Attaches a real-time listener to an entire collection. Fires CollectionChanged with the full result set when any document changes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Listen%20To%20Collection%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22collectionPath%22%5D%7D"></div>

| Param | Type |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|collectionPath|<span class="chip chip-text">Text</span>|

### Listen To Document

Attaches a real-time listener to a single document. Fires DocumentChanged when the document changes. If a listener with this tag exists, it is replaced.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Listen%20To%20Document%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Listen To Query

Attaches a real-time listener using the current query builder state. Fires CollectionChanged when results change. Resets query state after attaching.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Listen%20To%20Query%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22collectionPath%22%5D%7D"></div>

| Param | Type |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|collectionPath|<span class="chip chip-text">Text</span>|

### Query Add Filter

Adds a filter to the query. Operators: =, !=, &lt;, &lt;=, &gt;, &gt;=, array-contains, array-contains-any, in, not-in.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Query%20Add%20Filter%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22field%22,%20%22operator%22,%20%22value%22%5D%7D"></div>

| Param | Type |
|--------|------|
|field|<span class="chip chip-text">Text</span>|
|operator|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|

### Query End Before

Sets a pagination cursor to end results before the given values. Values must correspond to the QueryOrderBy fields.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Query%20End%20Before%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22values%22%5D%7D"></div>

| Param | Type |
|--------|------|
|values|<span class="chip chip-list">List</span>|

### Query Limit

Limits the number of query results.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Query%20Limit%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22count%22%5D%7D"></div>

| Param | Type |
|--------|------|
|count|<span class="chip chip-number">Number</span>|

### Query Order By

Adds an ordering clause. Direction must be 'ascending' or 'descending'. Can be called multiple times.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Query%20Order%20By%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22field%22,%20%22direction%22%5D%7D"></div>

| Param | Type |
|--------|------|
|field|<span class="chip chip-text">Text</span>|
|direction|<span class="chip chip-text">Text</span>|

### Query Reset

Clears all accumulated query conditions.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Query%20Reset%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Query Run

Executes the accumulated query on the given collection. Fires GotDocuments on success or FirestoreError on failure. Automatically resets the query state after execution.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Query%20Run%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|

### Query Start After

Sets a pagination cursor to start results after the given values. Values must correspond to the QueryOrderBy fields.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Query%20Start%20After%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22values%22%5D%7D"></div>

| Param | Type |
|--------|------|
|values|<span class="chip chip-list">List</span>|

### Run Transaction

Starts a Firestore transaction. Fires TransactionReady where you must perform all reads and writes. Fires TransactionCompleted on success or TransactionFailed on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Run%20Transaction%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Document

Creates or overwrites a document with the given data. Fires DocumentSet on success or FirestoreError on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Set%20Document%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22,%20%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|

### Stop All Listeners

Removes all active listeners.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Stop%20All%20Listeners%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop Listening

Removes the listener identified by the given tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Stop%20Listening%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22%5D%7D"></div>

| Param | Type |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|

### Transaction Delete

Deletes a document inside a transaction. Can ONLY be called inside the TransactionReady event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Transaction%20Delete%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Transaction Get

<span class="chip chip-unknown">Returns: <i>Dictionary</i></span>

Reads a document inside a transaction. Can ONLY be called inside the TransactionReady event. Returns the document data as a dictionary.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Transaction%20Get%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|

### Transaction Set

Sets a document inside a transaction. Can ONLY be called inside the TransactionReady event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Transaction%20Set%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22,%20%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|

### Transaction Update

Updates a document inside a transaction. Can ONLY be called inside the TransactionReady event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Transaction%20Update%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22,%20%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|

### Update Document

Merges fields into an existing document. Fails if the document doesn't exist. Fires DocumentUpdated on success or FirestoreError on failure.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Update%20Document%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22collectionPath%22,%20%22documentId%22,%20%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|collectionPath|<span class="chip chip-text">Text</span>|
|documentId|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|

## Properties

### Project Path

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Gets the project path prefix for this Firestore component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Project%20Path%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cloud%20Firestore%22,%20%22name%22:%20%22Project%20Path%22,%20%22getter%22:%20false%7D"></div>
