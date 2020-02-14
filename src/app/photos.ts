export interface Photo {
  photo: {
    data: RandomPhoto[];
    pagination: { cursor: string };
    total: number;
  };
  randomPhoto: RandomPhoto;
}

export interface RandomPhoto
    {
        "id": string,
        "created_at": string,
        "updated_at": string,
        "width": number,
        "height": number,
        "color": string,
        "likes": number,
        "liked_by_user": false,
        "description": string,
        "user": {
        "id": string,
        "username": string,
        "name": string,
        "portfolio_url": string,
        "bio": string,
        "location": string,
        "total_likes": number,
        "total_photos": number,
        "total_collections": number,
        "instagram_username": string,
        "twitter_username": string,
        "profile_image": {
            "small": string,
            "medium": string,
            "large": string
        },
        "links": {
            "self": string,
            "html": string,
            "photos": string,
            "likes": string,
            "portfolio": string
        }
        },
        "current_user_collections": [ // The *current user's* collections that this photo belongs to.
        {
            "id": number,
            "title": string,
            "published_at": string,
            "updated_at": string,
            "cover_photo": null,
            "user": null
        },
        // ... more collections
        ],
        "urls": {
        "raw": string,
        "full": string,
        "regular": string,
        "small": string,
        "thumb": string
        },
        "links": Links
    // ... more photos
}

export interface Links {
  "self": string,
  "html": string,
  "download": string,
  "download_location": string
}


export interface ListPhotos
    {
        "id": string,
        "created_at": string,
        "updated_at": string,
        "width": number,
        "height": number,
        "color": string,
        "likes": number,
        "liked_by_user": false,
        "description": string,
        "user": {
        "id": string,
        "username": string,
        "name": string,
        "portfolio_url": string,
        "bio": string,
        "location": string,
        "total_likes": number,
        "total_photos": number,
        "total_collections": number,
        "instagram_username": string,
        "twitter_username": string,
        "profile_image": {
            "small": string,
            "medium": string,
            "large": string
        },
        "links": {
            "self": string,
            "html": string,
            "photos": string,
            "likes": string,
            "portfolio": string
        }
        },
        "current_user_collections": [ // The *current user's* collections that this photo belongs to.
        {
            "id": number,
            "title": string,
            "published_at": string,
            "updated_at": string,
            "cover_photo": null,
            "user": null
        },
        // ... more collections
        ],
        "urls": {
        "raw": string,
        "full": string,
        "regular": string,
        "small": string,
        "thumb": string
        },
        "links": {
        "self": string,
        "html": string,
        "download": string,
        "download_location": string
        }
    // ... more photos
}

export interface SinglePhoto {
      "id": string,
      "created_at": string,
      "updated_at": string,
      "width": number,
      "height": number,
      "color": string,
      "downloads": number,
      "likes": number,
      "liked_by_user": false,
      "description": string,
      "exif": {
        "make": string,
        "model": string,
        "exposure_time": string,
        "aperture": string,
        "focal_length": string,
        "iso": number
      },
      "location": {
        "city": string,
        "country": string,
        "position": {
          "latitude": number,
          "longitude": number
        }
      },
      "tags": [
        { "title": string }
      ],
      "current_user_collections": [ // The *current user's* collections that this photo belongs to.
        {
          "id": number,
          "title": string,
          "published_at": string,
          "updated_at": string,
          "cover_photo": null,
          "user": null
        },
        // ... more collections
      ],
      "urls": {
        "raw": string,
        "full": string,
        "regular": string,
        "small": string,
        "thumb": string
      },
      "links": {
        "self": string,
        "html": string,
        "download": string,
        "download_location": string
      },
      "user": {
        "id": string,
        "updated_at": string,
        "username": string,
        "name": string,
        "portfolio_url": string,
        "bio": string,
        "location": string,
        "total_likes": number,
        "total_photos": number,
        "total_collections": number,
        "links": {
          "self": string,
          "html": string,
          "photos": string,
          "likes": string,
          "portfolio": string
        }
    }
}