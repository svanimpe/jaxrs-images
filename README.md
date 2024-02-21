# Images in JAX-RS

One of the first problems I ran into when I started building RESTful webservices was figuring out how to handle image uploads and downloads without setting up an object storage service. It turned out it was harder to find good information than to actually do it, so I decided to build an example application and share it with others.

## Setup

- Edit the class `ImageService` as follows:
    - Change the constant `BASE_DIR` to point to an existing directory on your server (or localhost) where you want to store the images.
    - Change the constant `MAX_SIZE_IN_MB` to the maximum allowed size you want to use. You will not be able to upload or download images larger than this size.
- Deploy the application.
- Drop some images (with extension `.jpg` or `.png` and not larger than the maximum allowed size) into the `BASE_DIR` folder you configured or use `upload.html` to upload some images (see below).

## Using the webservice

The webservice uses the following URLs:

```
http://localhost:8080/jaxrs-images/api/images
```

GET this URL to get a list of available images (filenames wrapped in a JSON array). POST to this URL to upload an image. The server will store this image and pick a random filename for it.

```
http://localhost:8080/jaxrs-images/api/images/{filename}
```

GET this URL to download the image with the given filename.

If you change any of these URLs, make sure you update the `BASE_URL` variables in `upload.js` and `download.js` as well.

## Using the front-end

The front-end consists of the following pages:

```
http://localhost:8080/jaxrs-images/upload.html
```

Use this page to upload an image via an HTML form.

```
http://localhost:8080/jaxrs-images/download.html
```

Use this page to get a list of available images and to download them.

This repository contains a NetBeans project. It was last tested using NetBeans 8.0.2, GlassFish 4.1 and JDK 8u25.
