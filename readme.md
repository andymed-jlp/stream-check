# Stream-Check repo

This repo is an example of reading from a neptune database stream.

Some documentation on the stream format is available at https://docs.aws.amazon.com/neptune/latest/userguide/streams-using.html and
the `examples` directory contains a CURL command and the response.

The task is to read this stream in a reliable and robust way fashion and to pass it onto another stream, so this becomes a 'consumer' and a 'provider', or a connector between two streams.

The 'provider' for the time being can be simply a set of json files.
