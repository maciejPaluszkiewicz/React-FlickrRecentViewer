const translateRecentPhotos = rawPhotos => {
  const translatedPhotos = rawPhotos.map(photo => {
    return {
      url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
        photo.id
      }_${photo.secret}_n.jpg`,
      id: photo.id,
      selected: false,
      owner: photo.owner,
      secret: photo.secret,
      title: photo.title
    };
  });

  //   let photo = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_n.jpg`

  return translatedPhotos;
};

//     url: "https://loremflickr.com/320/240?random=52",
//     id: 52,
//     title: "CAT_52",
//     owner: "whoevernotme",
//     date: "yestoday",
//     stats: { views: 32, favorites: 4000, comments: 555 }

/* <stats views="24" comments="4" favorites="1" /> */

const translateFavoritePhotos = rawFavPhotos => {
  const translatedFavPhotos = rawFavPhotos.map(photo => {
    return {
      url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
        photo.id
      }_${photo.secret}_n.jpg`,
      id: photo.id,
      title: photo.title,
      owner: photo.ownername,
      date: new Date(photo.dateupload * 1000).toLocaleDateString("pl-PL"),
      views: photo.views
      //     views: photo.stats.views,
      //     favorites: photo.stats.favorites,
      //     comments: photo.stats.comments
    };
  });
  return translatedFavPhotos;
};

const utilService = {
  translateRecentPhotos,
  translateFavoritePhotos
};

export default utilService;

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_n.jpg

//     url: "https://loremflickr.com/320/240?random=1",
//     id: 111,
//     selected: false
//   },

// farm: 66
// id: "48057373466"
// isfamily: 0
// isfriend: 0
// ispublic: 1
// owner: "181840709@N08"
// secret: "61f4a01dce"
// server: "65535"
// title: "Escape Buggy: Apocalypse Ready!"
