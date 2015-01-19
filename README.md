Pre-requisites:
---------------

    - gcloud (https://cloud.google.com/sdk/)
    - docker + boot2docker
    - Create a project in https://console.developers.google.com/

  I had to use boot2docker as described here https://www.dartlang.org/server/google-cloud-platform/app-engine/setup.html in order to test this custom runtime locally.


Running:
--------

To run this app try running  `gcloud preview app run .` after cloning this repo. If gcloud throws error Invalid choice 'preview' then run `gcloud components update preview app`. If you want to preview this on app engine please run `gcloud preview app deploy --server preview.appengine.google.com .`
