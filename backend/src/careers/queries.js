const getCareers = "SELECT * FROM careers";
const getCareerById = "SELECT * FROM careers WHERE id = $1";

module.exports = {
    getCareers,
    getCareerById,
};