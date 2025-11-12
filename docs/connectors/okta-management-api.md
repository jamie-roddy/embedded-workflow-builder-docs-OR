---
title: Okta Connector
sidebar_label: Okta
description: Manage users, groups, applications, and authentication policies in Okta.
---

![Okta](./assets/okta-management-api.png#connector-icon)
Manage users, groups, applications, and authentication policies in Okta.

## Connections

### API Token

Authenticate using an API token from your Okta Admin Console

| Input       | Comments                                                                                                                                                            | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Okta Domain | The base URL for the Okta API. Depending on your cloud environment, you can choose the correct one [here](https://developer.okta.com/docs/reference/api-overview/). |         |
| API Token   | API Token generated in your Okta Admin Console. [Learn more](https://developer.okta.com/docs/guides/create-an-api-token/main/).                                     |         |

### OAuth 2.0 Authorization Code

Authenticates actions in all Okta's API services.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Okta Domain         | The base URL for the Okta API. Depending on your cloud environment, you can choose the correct one [here](https://developer.okta.com/docs/reference/api-overview/). |         |
| Scopes              | Okta API permission scopes are set on the OAuth application.                                                                                                        |         |
| Client ID           | Client Id of your Okta's application. [Learn more](https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/)                                      |         |
| Client secret value | Client Secret generated in your Okta's application. [Learn more](https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/).                       |         |

### OAuth 2.0 Client Credentials

Use this to access Okta's own APIs (Users, Groups, Applications, etc.) to manage your Okta tenant using private_key_jwt authentication.

| Input                    | Comments                                                                                                                                                                                                                                                                                    | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Okta Domain              | The base URL for the Okta API. Depending on your cloud environment, you can choose the correct one [here](https://developer.okta.com/docs/reference/api-overview/).                                                                                                                         |         |
| Client ID                | Client Id of your Okta service application. The application must have the appropriate OAuth 2.0 scopes granted and admin roles assigned. [Learn more](https://developer.okta.com/docs/guides/implement-oauth-for-okta-serviceapp/main/)                                                     |         |
| Private Key (PEM format) | The private key in PEM format used to sign the JWT assertion. Generate a key pair and register the public key with your Okta service app. [Learn more](https://developer.okta.com/docs/guides/implement-oauth-for-okta-serviceapp/main/#create-and-register-a-public-private-key-pair)      |         |
| Scopes                   | Space-separated list of Okta API permission scopes. Common scopes include okta.users.read, okta.users.manage, okta.groups.read, okta.groups.manage, okta.apps.read, etc. [Learn more](https://developer.okta.com/docs/guides/implement-oauth-for-okta/main/#scopes-and-supported-endpoints) |         |

## Triggers

### Event Hook

Receive event hooks from Okta when a specified event occurs.

| Input                    | Comments                                                | Default |
| ------------------------ | ------------------------------------------------------- | ------- |
| Event Hook Items         | The list of event types to subscribe to.                |         |
| Dynamic Event Hook Items | The list of event types to subscribe to in code format. |         |
| Event Hook URL Headers   | Optional headers to include in the webhook request.     |         |
| Event Hook Filters       | The optional filter defined on a specific event type.   |         |
| Connection               |                                                         |         |

### New System Logs

Fetches system logs created on a recurring schedule.

| Input      | Comments                                                                                                                                                                                                                                                               | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Filter     | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| Connection |                                                                                                                                                                                                                                                                        |         |

### New Users

Fetches users created on a recurring schedule.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Updated Users

Fetches users updated on a recurring schedule.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

## Actions

### Activate Event Hook

Activate a specific event hook.

| Input         | Comments                  | Default |
| ------------- | ------------------------- | ------- |
| Event Hook ID | The ID of the event hook. |         |
| Connection    |                           |         |

### Activate User

Activate a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection |                                                                                                      |         |

### Add User to Group

Add a user to a group.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Group ID   | The unique identifier for the group. |         |
| User ID    | ID of an existing Okta user.         |         |
| Connection |                                      |         |

### Assign Application to User

Assigns an application to a user with app-specific profile and credentials.

| Input          | Comments                                                           | Default |
| -------------- | ------------------------------------------------------------------ | ------- |
| Application ID | The unique identifier for the application.                         |         |
| User ID        | ID of an existing Okta user.                                       |         |
| Username       | The username of the user to whom the application will be assigned. |         |
| Password       | The user's password.                                               |         |
| Scope          | Specifies the scope of the application.                            |         |
| Profile        | The app-specific profile for the user.                             |         |
| Connection     |                                                                    |         |

### Clear User Sessions

Clears all active sessions for a user, forcing re-authentication on next access.

| Input          | Comments                                                           | Default |
| -------------- | ------------------------------------------------------------------ | ------- |
| User ID        | ID of an existing Okta user.                                       |         |
| OAuth Tokens   | Revokes issued OpenID Connect and OAuth refresh and access tokens. | false   |
| Forget Devices | Clears the user's remembered factors for all devices.              | false   |
| Connection     |                                                                    |         |

### Create Event Hook

Create a new event hook.

| Input                     | Comments                                                                                     | Default |
| ------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Event Hook Name           | The name of the event hook.                                                                  |         |
| Event Hook URL            | The URL of the event hook.                                                                   |         |
| Do Not Activate on Create | When true, the event hook will not be activated and a verification request will not be sent. | false   |
| Event Hook Items          | The list of event types to subscribe to.                                                     |         |
| Dynamic Event Hook Items  | The list of event types to subscribe to in code format.                                      |         |
| Event Hook URL Headers    | Optional headers to include in the webhook request.                                          |         |
| Event Hook Filters        | The optional filter defined on a specific event type.                                        |         |
| Event Hook Description    | The description of the event hook.                                                           |         |
| Connection                |                                                                                              |         |

### Create Group

Create a group in Okta.

| Input             | Comments                          | Default |
| ----------------- | --------------------------------- | ------- |
| Group Name        | The name of the group.            |         |
| Group Description | A brief description of the group. |         |
| Connection        |                                   |         |

### Create User

Create a new user.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                                               | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Login                    | The unique identifier for the user (username).                                                                                                                                                                                                                                                                                                                         |         |
| Email                    | The user's email address.                                                                                                                                                                                                                                                                                                                                              |         |
| Department               | The user's department.                                                                                                                                                                                                                                                                                                                                                 |         |
| Employee Number          | The user's employee number.                                                                                                                                                                                                                                                                                                                                            |         |
| Locale                   | The user's default location for purposes of localizing items such as currency, date time format, numerical representations, and so on. A locale value is a concatenation of the ISO 639-1 two-letter language code, an underscore, and the ISO 3166-1 two-letter country code.                                                                                         | en_US   |
| First Name               | The user's first name.                                                                                                                                                                                                                                                                                                                                                 |         |
| Last Name                | The user's last name.                                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile Phone             | The user's mobile phone number.                                                                                                                                                                                                                                                                                                                                        |         |
| Password                 | The user's password. If not provided, an activation email will be sent to the user.                                                                                                                                                                                                                                                                                    |         |
| Hash Password            | The user's password hash.                                                                                                                                                                                                                                                                                                                                              |         |
| Question                 | The user's recovery question.                                                                                                                                                                                                                                                                                                                                          |         |
| Answer                   | The user's recovery answer.                                                                                                                                                                                                                                                                                                                                            |         |
| Provider Name            | The name of the provider for the user.                                                                                                                                                                                                                                                                                                                                 |         |
| Provider Type            | The type of the provider for the user.                                                                                                                                                                                                                                                                                                                                 |         |
| Group IDs                | List of group IDs to assign the user to.                                                                                                                                                                                                                                                                                                                               |         |
| Realm ID                 | The ID of the realm to which the user belongs.                                                                                                                                                                                                                                                                                                                         |         |
| Type                     | The type of the user.                                                                                                                                                                                                                                                                                                                                                  |         |
| Next Login               | With activate=true, if nextLogin=changePassword, a user is created, activated, and the password is set to EXPIRED. The user must change it the next time they sign in.                                                                                                                                                                                                 |         |
| Provider                 | Indicates whether to create a user with a specified authentication provider.                                                                                                                                                                                                                                                                                           | false   |
| Activate                 | When true, executes an activation lifecycle operation when creating the user.                                                                                                                                                                                                                                                                                          | true    |
| Profile Extra Attributes | List of additional profile attributes to include in the request. This can be used to include attributes that are not explicitly supported by this component. See [Okta's API documentation](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/updateUser!path=profile&t=request) for a list of supported attributes. |         |
| Connection               |                                                                                                                                                                                                                                                                                                                                                                        |         |

### Deactivate Event Hook

Deactivate a specific event hook.

| Input         | Comments                  | Default |
| ------------- | ------------------------- | ------- |
| Event Hook ID | The ID of the event hook. |         |
| Connection    |                           |         |

### Deactivate User

Deactivate a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection |                                                                                                      |         |

### Delete All Event Hooks

Delete an event hook by ID.

| Input          | Comments                                                                                                       | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Event Hook URL | If provided, only event hooks with this URL will be deleted. If not provided, all event hooks will be deleted. |         |
| Connection     |                                                                                                                |         |

### Delete Event Hook

Delete an event hook by ID.

| Input         | Comments                  | Default |
| ------------- | ------------------------- | ------- |
| Event Hook ID | The ID of the event hook. |         |
| Connection    |                           |         |

### Delete Group

Delete a group by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Group ID   | The unique identifier for the group. |         |
| Connection |                                      |         |

### Delete User

Delete a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection |                                                                                                      |         |

### Get Application

Retrieve an application by ID.

| Input          | Comments                                                                                                            | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Application ID | The unique identifier for the application.                                                                          |         |
| Expand         | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response. |         |
| Connection     |                                                                                                                     |         |

### Get Application User Assignment

Retrieves a specific user assignment for a specific app.

| Input          | Comments                                                                                                            | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Application ID | The unique identifier for the application.                                                                          |         |
| User ID        | ID of an existing Okta user.                                                                                        |         |
| Expand         | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response. |         |
| Connection     |                                                                                                                     |         |

### Get Event Hook

Get an event hook by ID.

| Input         | Comments                  | Default |
| ------------- | ------------------------- | ------- |
| Event Hook ID | The ID of the event hook. |         |
| Connection    |                           |         |

### Get Group

Retrieve a group by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Group ID   | The unique identifier for the group. |         |
| Connection |                                      |         |

### Get System Logs

Retrieves system log events for security monitoring and compliance auditing. Max 10000 records can be fetched at once.

| Input      | Comments                                                                                                                                                                                                                                                               | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All  | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |
| Since      | Filters the lower time bound of the log events published property for bounded queries or persistence time for polling queries.                                                                                                                                         |         |
| Until      | Filters the upper time bound of the log events published property for bounded queries or persistence time for polling queries.                                                                                                                                         |         |
| Filter     | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| q          | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                                                                                           |         |
| After      | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                                |         |
| Limit      | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                             |         |
| Sort Order | Specifies the sort order: asc or desc (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn't case sensitive. sortOrder is ignored if sortBy isn't present.                                                      |         |
| Connection |                                                                                                                                                                                                                                                                        |         |

### Get User

Retrieve a user by ID or login.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user.                |         |
| Expand     | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response. |         |
| Connection |                                                                                                                     |         |

### List Applications

List applications with optional search and filtering.

| Input               | Comments                                                                                                                                                                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All           | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |
| q                   | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                                                                                           |         |
| After               | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                                |         |
| Limit               | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                             |         |
| Use Optimization    | When true, the response will be optimized for faster retrieval. This may exclude some properties from the response.                                                                                                                                                    | false   |
| Filter              | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| Expand              | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response.                                                                                                                                                    |         |
| Include Non-Deleted | When true, both deleted and non-deleted applications are returned.                                                                                                                                                                                                     | false   |
| Connection          |                                                                                                                                                                                                                                                                        |         |

### List Event Hooks

List all event hooks.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Group Members

Retrieves all users who are members of the specified group.

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Group ID   | The unique identifier for the group.                                                                    |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                               | false   |
| After      | The cursor for the next page of results. This value is obtained from the `Link` header of the response. |         |
| Limit      | Specifies the number of results returned. Defaults to 200.                                              |         |
| Connection |                                                                                                         |         |

### List Groups

List groups with optional search and filtering.

| Input            | Comments                                                                                                                                                                                                                                                               | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All        | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |
| Search           | A search string to filter results. See Okta's documentation for supported search fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=search&t=request).      |         |
| Filter           | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| q                | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                                                                                           |         |
| After            | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                                |         |
| Limit            | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                             |         |
| Sort By          | Specifies field to sort by (for search queries only). This can be any single property, for example sortBy=profile.lastName. Users with the same value for the sortBy property will be ordered by id.                                                                   |         |
| Sort Order       | Specifies the sort order: asc or desc (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn't case sensitive. sortOrder is ignored if sortBy isn't present.                                                      |         |
| Extra Parameters | List of additional parameters to include in the request. This can be used to include parameters that are not explicitly supported by this component. See Okta's API documentation for a list of supported parameters.                                                  |         |
| Connection       |                                                                                                                                                                                                                                                                        |         |

### List Policies

List policies with optional search and filtering.

| Input       | Comments                                                                                                                                                                                             | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Type        | Specifies the type of policy to return. The following policy types are available only with the Okta Identity Engine.                                                                                 |         |
| Status      | Specifies the status of the policies to return.                                                                                                                                                      |         |
| Fetch All   | When true, fetches all pages of results using pagination.                                                                                                                                            | false   |
| q           | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                         |         |
| Expand      | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response.                                                                                  |         |
| Sort By     | Specifies field to sort by (for search queries only). This can be any single property, for example sortBy=profile.lastName. Users with the same value for the sortBy property will be ordered by id. |         |
| Limit       | Specifies the number of results returned. Defaults to 200.                                                                                                                                           |         |
| After       | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                              |         |
| Resource ID | Reference to the associated authorization server.                                                                                                                                                    |         |
| Connection  |                                                                                                                                                                                                      |         |

### List Realms

Lists all realms in your org.

| Input      | Comments                                                                                                                                                                                                                                                          | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All  | When true, fetches all pages of results using pagination.                                                                                                                                                                                                         | false   |
| Limit      | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                        |         |
| After      | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                           |         |
| Search     | A search string to filter results. See Okta's documentation for supported search fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=search&t=request). |         |
| Sort By    | Specifies field to sort by (for search queries only). This can be any single property, for example sortBy=profile.lastName. Users with the same value for the sortBy property will be ordered by id.                                                              |         |
| Sort Order | Specifies the sort order: asc or desc (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn't case sensitive. sortOrder is ignored if sortBy isn't present.                                                 |         |
| Connection |                                                                                                                                                                                                                                                                   |         |

### List User Applications

List applications for a specific user.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Connection |                                                                                                      |         |

### List User Factors

Lists all enrolled factors for the specified user that are included in the highest priority authenticator enrollment policy that applies to the user.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| User ID    | ID of an existing Okta user. |         |
| Connection |                              |         |

### List User Groups

List groups for a specific user.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Connection |                                                                                                      |         |

### List Users

List users with optional search and filtering.

| Input            | Comments                                                                                                                                                                                                                                                               | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All        | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |
| Search           | A search string to filter results. See Okta's documentation for supported search fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=search&t=request).      |         |
| Filter           | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| q                | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                                                                                           |         |
| After            | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                                |         |
| Limit            | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                             |         |
| Sort By          | Specifies field to sort by (for search queries only). This can be any single property, for example sortBy=profile.lastName. Users with the same value for the sortBy property will be ordered by id.                                                                   |         |
| Sort Order       | Specifies the sort order: asc or desc (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn't case sensitive. sortOrder is ignored if sortBy isn't present.                                                      |         |
| Extra Parameters | List of additional parameters to include in the request. This can be used to include parameters that are not explicitly supported by this component. See Okta's API documentation for a list of supported parameters.                                                  |         |
| Connection       |                                                                                                                                                                                                                                                                        |         |

### List User Types

Lists all user types in your org.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to Okta.

| Input                   | Comments                                                                                                                                                                                                          | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                   |         |
| URL                     | Input the path only (/users), The base URL is already included (https://{yourOktaDomain}.com/api/v1). For example, to connect to https://{yourOktaDomain}.com/api/v1/users, only /users is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                           |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                         |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                              |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                  |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                            |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                               |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                       |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                          | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                               |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                               | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                  | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                               | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                     | false   |

### Reactivate User

Reactivate a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection |                                                                                                      |         |

### Remove Application User Assignment

Removes an application assignment from a user, revoking access to the application.

| Input          | Comments                                            | Default |
| -------------- | --------------------------------------------------- | ------- |
| Application ID | The unique identifier for the application.          |         |
| User ID        | ID of an existing Okta user.                        |         |
| Send Email     | When true, sends a deactivation email to the admin. | false   |
| Connection     |                                                     |         |

### Remove User from Group

Remove a user from a group.

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Group ID   | The unique identifier for the group.                             |         |
| User ID    | The unique identifier for the user to be removed from the group. |         |
| Connection |                                                                  |         |

### Reset User Password

Reset a user's password by ID or login.

| Input           | Comments                                                                                             | Default |
| --------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID              | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email      | When true, sends a deactivation email to the admin.                                                  | true    |
| Revoke Sessions | When true, revokes all of the user's active sessions.                                                | false   |
| Connection      |                                                                                                      |         |

### Set User Password

Set a user's password by ID or login.

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| User ID           | ID of an existing Okta user.                          |         |
| New Password      | The new password for the user.                        |         |
| New Hash Password | The new password hash for the user.                   |         |
| Old Password      | The old password for the user.                        |         |
| Old Hash Password | The old password hash for the user.                   |         |
| Revoke Sessions   | When true, revokes all of the user's active sessions. | false   |
| Connection        |                                                       |         |

### Suspend User

Suspend a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Connection |                                                                                                      |         |

### Unenroll User Factor

Unenrolls a specific factor for the specified user.

| Input                      | Comments                                                                                                                              | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| User ID                    | ID of an existing Okta user.                                                                                                          |         |
| Factor ID                  | ID of an existing user factor.                                                                                                        |         |
| Remove Recovery Enrollment | When true, removes the phone number as both a recovery method and a factor. This parameter is only used for the sms and call factors. | false   |
| Connection                 |                                                                                                                                       |         |

### Unlock User

Unlock a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection |                                                                                                      |         |

### Unsuspend User

Unsuspend a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Connection |                                                                                                      |         |

### Update Application User Assignment

Updates the app-specific profile and credentials for a user's application assignment.

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Application ID | The unique identifier for the application.                                                       |         |
| User ID        | ID of an existing Okta user.                                                                     |         |
| Profile        | The app-specific profile for the user. Either the profile or password/username must be provided. |         |
| Username       | The username of the user to whom the application will be assigned.                               |         |
| Password       | The user's password.                                                                             |         |
| Connection     |                                                                                                  |         |

### Update Group

Updates profile information for an existing group.

| Input             | Comments                             | Default |
| ----------------- | ------------------------------------ | ------- |
| Group ID          | The unique identifier for the group. |         |
| Group Name        | The name of the group.               |         |
| Group Description | A brief description of the group.    |         |
| Connection        |                                      |         |

### Update User

Update a user by ID or login.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                                               | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ID                       | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user.                                                                                                                                                                                                                                                                   |         |
| Login                    | The unique identifier for the user (username).                                                                                                                                                                                                                                                                                                                         |         |
| Email                    | The user's email address.                                                                                                                                                                                                                                                                                                                                              |         |
| Department               | The user's department.                                                                                                                                                                                                                                                                                                                                                 |         |
| Employee Number          | The user's employee number.                                                                                                                                                                                                                                                                                                                                            |         |
| Locale                   | The user's default location for purposes of localizing items such as currency, date time format, numerical representations, and so on. A locale value is a concatenation of the ISO 639-1 two-letter language code, an underscore, and the ISO 3166-1 two-letter country code.                                                                                         | en_US   |
| First Name               | The user's first name.                                                                                                                                                                                                                                                                                                                                                 |         |
| Last Name                | The user's last name.                                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile Phone             | The user's mobile phone number.                                                                                                                                                                                                                                                                                                                                        |         |
| Password                 | The user's password. If not provided, an activation email will be sent to the user.                                                                                                                                                                                                                                                                                    |         |
| Hash Password            | The user's password hash.                                                                                                                                                                                                                                                                                                                                              |         |
| Question                 | The user's recovery question.                                                                                                                                                                                                                                                                                                                                          |         |
| Answer                   | The user's recovery answer.                                                                                                                                                                                                                                                                                                                                            |         |
| Realm ID                 | The ID of the realm to which the user belongs.                                                                                                                                                                                                                                                                                                                         |         |
| Profile Extra Attributes | List of additional profile attributes to include in the request. This can be used to include attributes that are not explicitly supported by this component. See [Okta's API documentation](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/updateUser!path=profile&t=request) for a list of supported attributes. |         |
| Connection               |                                                                                                                                                                                                                                                                                                                                                                        |         |

### Verify Event Hook

Verify a specific event hook.

| Input         | Comments                  | Default |
| ------------- | ------------------------- | ------- |
| Event Hook ID | The ID of the event hook. |         |
| Connection    |                           |         |
