import urlMetadata from 'url-metadata';

const parseUrl = (url: string) => {
  urlMetadata(url).then(
    function (metadata) {
      // success handler
      console.log(metadata);
    },
    function (error) {
      // failure handler
      console.log(error);
    },
  );
};

export default parseUrl;
