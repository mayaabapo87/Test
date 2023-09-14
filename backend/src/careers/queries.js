const getCareers = "SELECT * FROM careers";
const getCareerById = "SELECT * FROM careers WHERE id = $1";
const getPartners = "SELECT * FROM partners";
const getPartnerById = "SELECT * FROM partners WHERE id =$1";
const getStories = "SELECT * FROM stories";
const getStoryById = "SELECT * FROM stories WHERE id =$1";


module.exports = {
    getCareers,
    getCareerById,
    getPartners,
    getPartnerById,
    getStories,
    getStoryById,
};