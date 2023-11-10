
const Profile = require('../models/userProfile');


const getUserProfile = async(req,res) =>{
    try {
        const profile = await Profile.findById(req.params.id);
        res.json(profile);
    }catch (error){
        res.status(400).json({message:"User profile not found"});
    }
}
const updateUserProfile = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);

        if (!profile) {
            return res.status(404).json({ message: "User profile not found" });
        }

        if (req.body.limit >= req.body.income) {
            return res.status(400).json({ message: "Set limit should not exceed Income" });
        }

        const expenses = req.body.categories.reduce((total, category) => total + category.value, 0);
        const balance = req.body.limit - expenses;

        profile.income = req.body.income;
        profile.limit = req.body.limit;
        profile.savings = req.body.savings;
        profile.categories = req.body.categories;
        profile.expenses = expenses;
        profile.balance = balance;

        await profile.save();

        res.json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update profile" });
    }
};

module.exports = {getUserProfile, updateUserProfile};