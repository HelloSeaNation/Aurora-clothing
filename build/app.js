"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'frontend')));
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
app.get("/", (req, res) => {
    res.send(path_1.default.join(__dirname, 'frontend', 'index.html'));
});
// Endpoint for adding a review
app.post("/api/reviews/:itemId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.itemId;
        const newReview = req.body.review;
        // Load existing reviews from the file
        const reviewsFilePath = path_1.default.join(__dirname, 'frontend', 'reviews.json');
        const existingReviews = JSON.parse(yield promises_1.default.readFile(reviewsFilePath, 'utf-8'));
        // Add the new review for the specified item
        existingReviews[itemId] = [...(existingReviews[itemId] || []), newReview];
        // Save the updated reviews back to the file
        yield promises_1.default.writeFile(reviewsFilePath, JSON.stringify(existingReviews, null, 2));
        res.status(200).json({ success: true, message: "Review added successfully." });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error." });
    }
}));
// Endpoint for fetching reviews
app.get("/api/reviews/:itemId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.itemId;
        // Load reviews from the file
        const reviewsFilePath = path_1.default.join(__dirname, 'frontend', 'reviews.json');
        const reviews = JSON.parse(yield promises_1.default.readFile(reviewsFilePath, 'utf-8'));
        // Return reviews for the specified item
        res.status(200).json({ success: true, reviews: reviews[itemId] || [] });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error." });
    }
}));
// Endpoint for sending contact form submissions via email
app.post("/api/contact-us", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, questionType, message } = req.body;
        // Set up the Nodemailer transporter
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'wendywooden14@gmail.com',
                pass: 'glpv fhto zrng fogn',
            },
        });
        // Set up email content
        const mailOptions = {
            from: 'wendywooden14@gmail.com',
            to: 'wendywooden14+@gmail.com',
            subject: 'Customer Message from Aurora Shop',
            text: `
                Name: ${name}
                Email: ${email}
                Question Type: ${questionType}
                Message: ${message}
            `,
        };
        // Send email
        yield transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully." });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error." });
    }
}));
