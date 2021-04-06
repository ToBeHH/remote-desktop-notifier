# remote-desktop-notifier

Show notifications on the desktop sent by a remote service (e.g. my home
automation service)

# Installation

Run

```bash
yarn install
```

# Starting

To run the service listening on the default Port (16333), run

```bash
yarn start
```

To start with a specific port, run

```bash
PORT=12345 yarn start
```

# Sending messages to be displayed

You send the data just as request parameters. For example on the command line,
you can do:

```bash
curl "http://localhost:16333/?summary=Eingehender%20Anruf&body=von%20123"
```

In OpenHAB you can use the following code in a rule:

```java
import java.net.URLEncoder

...

val String notifyPayload = "summary=Eingehender%20Anruf&body=von%20" + URLEncoder::encode(callerName, "UTF-8") + "&timeout=0"

sendHttpPostRequest("http://192.168.1.100:16333", "application/x-www-form-urlencoded", notifyPayload, 3000)
```
