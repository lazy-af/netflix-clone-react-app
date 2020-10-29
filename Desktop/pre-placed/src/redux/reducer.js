import slack from "../assets/images/slack_icon.webp";
import facebook from "../assets/images/facebook_icon.jpg";
import zendesk from "../assets/images/zendesk_png.png";
import mailchimp from "../assets/images/mailchimp_icon.png";
import wordpress from "../assets/images/wordpress_icon.png";
import salesforce from "../assets/images/salesforce_icon.webp";

const initialState = {
  integrations: [
    {
      img: slack,
      title: "Slack",
    },
    {
      img: facebook,
      title: "Facebook",
    },
    {
      img: zendesk,
      title: "Zendesk",
    },
    {
      img: mailchimp,
      title: "MailChimp",
    },
    {
      img: wordpress,
      title: "WordPress",
    },
    {
      img: salesforce,
      title: "Salesforce",
    },
  ],
  favIntegration: [],
};
const reducer = (state = initialState, action) => {
  if (action.type === "AddToFav") {
    return {
      ...state,
      favIntegration: [
        ...state.favIntegration,
        { img: action.payload.img, title: action.payload.title },
      ],
    };
  }
  if (action.type === "DeleteFromFav") {
    return {
      ...state,
      favIntegration: state.favIntegration.filter(
        (d) => d.title !== action.payload.title
      ),
    };
  }
  return state;
};

export default reducer;
