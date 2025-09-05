---
title: Building %WORKFLOW_PLURAL%
description: Build new %WORKFLOW_PLURAL% using %COMPANY_POSSESSIVE% %EMBEDDED_WORKFLOW_BUILDER%
---

%COMPANY_POSSESSIVE% %EMBEDDED_WORKFLOW_BUILDER% lets you build %WORKFLOW_PLURAL% that connect %COMPANY_CORE_PRODUCT% to other applications and services you use.
This article describes how to build %WORKFLOW_PLURAL%.

If you have not done so yet, please first review the [Getting Started](./get-started.md) guide.

## Creating a new %WORKFLOW%

To create a new %WORKFLOW%, first log in to [%COMPANY_CORE_PRODUCT%](%APP_LOGIN_URL%).
Next, %NAVIGATING_TO_BUILDER%.
Here, you will see all of the %WORKFLOW_PLURAL% that you've built.

To create a new %WORKFLOW%, click **+ %WORKFLOW%**.

## Steps

Actions, like downloading a file from an [SFTP server](./connectors/sftp.md) or posting a message to [Slack](./connectors/slack.md), are added as %WORKFLOW% **steps**.
Steps are executed in order, and results from one step can be used as inputs for subsequent steps.

Steps are run in order from top to bottom, and you can add conditional logic to your %WORKFLOW% with [branching](./branching.md), or run a series of steps within a [loop](./looping.md).
If one step throws an error, your %WORKFLOW% stops running until it is invoked again (though you can decide how to [handle errors](./error-handling.md)).

### The trigger step

The first step of your %WORKFLOW% is the **trigger** step, which determines when your %WORKFLOW% will run.
The [triggers](./triggering.md) article details how triggers work and how to invoke your %WORKFLOW%.

### Adding steps to your %WORKFLOW%

To add a step to your %WORKFLOW%, click the **+** icon underneath the trigger or another action.

Select the connector and action you would like to add to your %WORKFLOW%.
For example, you can choose the **Amazon DynamoDB** connector, and then select the **Query Items** action.

![Add a step to a %WORKFLOW%](./assets/building/add-step.png)

### Changing step names and descriptions

By default, steps are uniquely named after the action they invoke (so, they're named things like **CSV to JSON** or **Delete Object**).
To override that default name, select the step in the %WORKFLOW% and then click the step's name in the configuration drawer.

Like using descriptive variable names in a computer program, renaming steps allows you to give your steps descriptive names.
Rather than `HTTP - PUT`, you could give your step a name like **Update Record in Acme**.
We recommend giving your steps descriptive names and descriptions so your team members can read through your %WORKFLOW_PLURAL% and understand their purpose more readily.

![Rename a step](./assets/building/rename-step.png)

## Passing data between steps

As your %WORKFLOW% runs, each step generates a [step result](#step-results).
The results of one step can be fed into subsequent steps through [step inputs](#step-inputs).

### Step results

Each step in your %WORKFLOW% produces a result.
For example, an [SFTP - List Directory](./connectors/sftp.md#list-directory) step will return a list of strings representing file names.

![SFTP list directory result](./assets/building/sftp-list-directory.png)

An [SFTP - Read File](./connectors/sftp.md#read-file) step will return the contents of a file that is pulled from an SFTP server (in this example, an image was fetched).

![SFTP list read file](./assets/building/sftp-read-file.png)

Step results take one of three forms:

- A primitive value, like a **string**, **boolean** (true/false), **number**, an **array** of primitives, or even a `null` for steps that have nothing to return.
- A [JavaScript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with several key-value pairs.

  ```json
  { "key1": "value1", "key2": ["foo", "bar", "baz"] }
  ```

  You can reference objects' keys using "dot notation".
  For example, to reference `"baz"` above, a subsequent step could reference this step's `results.key2.2` (note the `.2` references "the item at index `2` in the list").

- A **binary file**.
  Binary file outputs are objects that contain a `contentType` property (like `"image/png"`) and a `data` property containing the contents of the file in a [JavaScript Buffer](https://nodejs.org/api/buffer.html).

  ```json
  {
    "data": Buffer,
    "contentType": "application/pdf"
  }
  ```

  When viewing a binary file that can be rendered in a browser (like an image), you'll see the image in the **Output** drawer.
  If you've downloaded a different binary file type (like a PDF or MP3), you'll see it represented like `data<123456 bytes>`.

### The trigger's step result

The trigger step's result contains two major things:

1. Metadata about the execution.
   For example, your trigger's `result.invokeUrl` contains the webhook URL for your %WORKFLOW%.
   The `result.startedAt` property contains the time at which the execution began.
2. The webhook request (if your %WORKFLOW% was invoked via webhook), including:
   1. HTTP headers. If your webhook request included custom HTTP headers, you can reference them from your trigger's `result.headers.header-name`.
   2. Request body. `result.rawBody` contains the raw, unparsed body that was sent to your %WORKFLOW% webhook URL. If you sent JSON data, the JSON will be parsed under `result.body.data`.

![Referencing trigger step result](./assets/building/trigger-step-result.png)

Other steps in your %WORKFLOW% can reference both the metadata and webhook request data contained in your trigger's result.

### Step inputs

Each step of your %WORKFLOW% requires a set of **inputs**.
An input might represent a RESTful URL to fetch data from, an ID of a Salesforce Lead to update, the name of an Amazon S3 bucket, or the contents of a file to upload.

Some inputs are required, while others are optional.

The inputs you specify can be static strings (like an Amazon S3 bucket name), a reference to a previous step's results (like a Salesforce Lead ID), or a combination of the two (like a RESTful URL that has dynamic portions).

![Step inputs](./assets/building/step-inputs.png)
