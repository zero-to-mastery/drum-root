import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Error = ({ error: { statusCode } }) => {
  const errStrings = {
    default: {
      title: 'An error occured.',
      content: 'Try refreshing the page.'
    },
    101: { title: 'Switching Protocols' },
    100: { title: 'Continue' },
    200: { title: 'OK', content: 'Action completed successfully' },
    201: {
      title: 'Created',
      content:
        'Success following a POST command Request has been accepted for processing,but processing has not completed'
    },
    202: {
      title: 'Accepted',
      content:
        'Response to a GET command; indicates that the returned meta information is from a private overlaid web'
    },
    203: {
      title: 'Partial Information',
      content:
        'Server received the request, but there is no information to send back'
    },
    204: { title: 'No Content' },
    206: { title: 'Partial Content' },
    205: {
      title: 'Reset Content',
      content:
        'Requested file was partially sent; usually caused by stopping or refreshing a web page'
    },
    301: { title: 'Moved Permanently' },
    300: {
      title: 'Multiple Choices',
      content:
        'Requested a directory instead of a specific file; the web server added the file name index.html, index.htm, home.html, or home.htm to the URL'
    },
    303: { title: 'See Other' },
    302: { title: 'Moved Temporarily' },
    304: {
      title: 'Not Modified',
      content:
        'Cached version of the requested file is the same as the file to be sent'
    },
    400: { title: 'Bad Request' },
    305: {
      title: 'Use Proxy',
      content:
        'Request had bad syntax or was impossible to fulfill User failed to provide a valid user name/password required for access to a file/directory'
    },
    401: { title: 'Unauthorized' },
    403: { title: 'Forbidden' },
    402: {
      title: 'Payment Required',
      content:
        'Request does not specify the file name, or the directory or the file does not have the permission that allows the pages to be viewed from the web'
    },
    405: { title: 'Method Not Allowed' },
    404: { title: 'Not Found', content: 'Requested file was not found' },
    406: { title: 'Not Acceptable' },
    407: { title: 'Proxy Authentication Required' },
    408: { title: 'Request Time-Out' },
    409: { title: 'Conflict' },
    410: { title: 'Gone' },
    411: { title: 'Length Required' },
    412: { title: 'Precondition Failed' },
    413: { title: 'Request Entity Too Large' },
    414: { title: 'Request-URL Too Large' },
    415: { title: 'Unsupported Media Type' },
    500: {
      title: 'Server Error',
      content:
        'In most cases, this error results from a problem with the code or program you are calling rather than with the web server itself.'
    },
    501: {
      title: 'Not Implemented',
      content: 'Server does not support the facility required'
    },
    502: { title: 'Bad Gateway' },
    503: {
      title: 'Out of Resources',
      content:
        'Server cannot process the request due to a system overload; should be a temporary condition'
    },
    504: {
      title: 'Gateway Time-Out',
      content:
        'Service did not respond within the time frame that the gateway was willing to wait'
    },
    505: { title: 'HTTP Version Not Supported' }
  };

  return (
    <>
      <Helmet>
        <title>
          {errStrings[statusCode]
            ? errStrings[statusCode].title
            : errStrings.default.title}
        </title>
      </Helmet>
      <h2>
        {errStrings[statusCode]
          ? errStrings[statusCode].title
          : errStrings.default.title}
      </h2>
      <h3>
        {errStrings[statusCode]
          ? errStrings[statusCode].content
          : errStrings.default.content}
      </h3>
    </>
  );
};

Error.propTypes = {
  error: PropTypes.shape({
    statusCode: PropTypes.number.isRequired
  })
};

export default Error;
