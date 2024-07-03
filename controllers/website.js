const user = require("../models/users");

exports.websiteConentCreator = async (req, res) => {
  try {
    let body = req.body;
    let id = req.user.id;
    if (!id) {
      return res.status(401).send({
        message: "Invalid Request !",
      });
    }
    let {
      top_line_bio,
      banner_heading,
      banner_description,
      about_heading,
      about_middle_line,
      about_description,
      contract_address,
      contract_email,
      contract_phone,
    } = body;
    let websiteContentObj = {
      website: {
        top_line_bio,
        banner_heading,
        banner_description,
        about_heading,
        about_middle_line,
        about_description,
        contract_address,
        contract_email,
        contract_phone,
      },
    };

    if (req?.file?.filename) {
      websiteContentObj.website.banner_img = "banner/" + req?.file?.filename;
    } else {
      let website = await user.find({ _id: id });
      websiteContentObj.website.banner_img = website[0].website?.banner_img;
    }

    let result = await user.updateOne(
      { _id: id },
      {
        $set: {
          website: websiteContentObj.website,
        },
      }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ error: error.message });
  }
};

exports.websiteConentFetch = async (req, res) => {
  try {
    let website = await user.findById(req.user.id); // user.find({_id: '64b63f0ee84ef4e0706af6bf'}).pretty()
    if (website.website) {
      let websiteData = {
        id: req.params.id,
        banner_image: "http://localhost:4000/" + website.website.banner_img,
        top_line_bio: website.website.top_line_bio,
        banner_heading: website.website.banner_heading,
        banner_description: website.website.banner_description,
        about_heading: website.website.about_heading,
        about_middle_line: website.website.about_middle_line,
        about_description: website.website.about_description,
        contract_address: website.website.contract_address,
        contract_email: website.website.contract_email,
        contract_phone: website.website.contract_phone,
      };
      res.send(websiteData);
    } else {
      res.status(204).send({ message: "no data found" });
    }
  } catch (error) {
    console.log(error)
    res.status(401).send({ message: "Something went wrong" });
  }
};
