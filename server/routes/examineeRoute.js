const Examinee = require('../models/Examinee');// importing the model Examinee.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {// it will be used when we get the"get request".
  const examinee = await Examinee.find();
  return res.json({ data: examinee })
})
router.post('/', async (req, res) => {
  try {
    console.log("Incoming data:", req.body);  // Debug line
    const examinee = new Examinee(req.body);
    await examinee.save();  // ⬅ make sure to await the save

    res.status(201).json({ message: "Examinee registered successfully" });
    const html = `
  <div style="font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg, #e3f2fd, #ffffff); padding: 40px;">
    <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">
     
      <!-- Header -->
      <div style="background: linear-gradient(90deg, #007bff, #00c6ff); padding: 25px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px;">🎓 Welcome to Softpro!</h1>
      </div>
     
      <!-- Body -->
      <div style="padding: 30px;">
        <p style="font-size: 18px; color: #333;"><strong>Dear ${name},</strong></p>

        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          We're excited to welcome you to the <strong>Softpro Exam Prep</strong>! Your registration was successful, and your account is now active.
        </p>

        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          You can now log in to access your dashboard, take exams, track your progress, and explore learning resources.
        </p>

        <!-- CTA Button -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://localhost:5000/login&quot; style="background: #007bff; color: #fff; padding: 12px 24px; font-size: 16px; border-radius: 6px; text-decoration: none; display: inline-block;">
            🔐 Log in to Your Account
          </a>
        </div>

        <p style="font-size: 16px; color: #555;">
          If you have any questions or face issues logging in, feel free to contact our support team.
        </p>

        <p style="margin-top: 30px; font-size: 16px; color: #333;">
          Best regards,<br>
          <strong>Team Softpro</strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="background-color: #f1f1f1; text-align: center; padding: 20px; font-size: 12px; color: #777;">
        This is an automated message. Please do not reply to this email.
      </div>
    </div>
  </div>
`;
setTimeout( async()=>{
      await sendEmail(email, "Welcome to the Exam Portal", html);
    },100)

  } catch (error) {
    console.error("Error in POST /examinee:", error);  // Log the actual error
    return res.status(400).json({ error: error.message });
  }
});
router.put('/change', async (req, res) => {
  try {
    const { op, np, cnp, email } = req.body;
    console.log('Change Password Request:', { op, np, cnp, email });

    if (np !== cnp) {
      return res.status(400).json({ message: "New password and confirm password do not match" });
    }

    const examinee = await Examinee.findOne({ email });
    if (!examinee) {
      console.log('No user found with email:', email);
      return res.status(404).json({ message: "Examinee not found" });
    }

    console.log('Stored password:', examinee.password);

    if (examinee.password !== op) {
      console.log('Old password mismatch');
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    if (op === np) {
      return res.status(400).json({ message: "New password cannot be the same as old password" });
    }

    examinee.password = np;
    await examinee.save();

    return res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error in PUT /change:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
router.put('/change', async (req, res) => {
  try {
    const { op, np, cnp, email } = req.body;

    // Validate mandatory fields
    if (!op || !np || !cnp || !email) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (np !== cnp) {
      return res.status(400).json({ success: false, message: "New password and confirm password do not match." });
    }

    if (op === np) {
      return res.status(400).json({ success: false, message: "New password must be different from old password." });
    }

    // Find the user by email
    const examinee = await Examinee.findOne({ email });
    if (!examinee) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare current (old) password as plain text
    if (examinee.password !== op) {
      return res.status(400).json({ success: false, message: "Current password is incorrect." });
    }

    // Update password in DB directly
    examinee.password = np; // new password as plain text
    await examinee.save();

    return res.status(200).json({ success: true, message: "Password changed successfully." });

  } catch (error) {
    console.error("Password change error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const examinee = await Examinee.findByIdAndDelete(id);
  //session.save();
  return res.json({ message: 'Deleted successfully' });
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const examinee = await Examinee.findByIdAndUpdate(id, req.body)
  return res.json({ message: "updated Successfully" })
})
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const examinee = await Examinee.findOne({ email: email })
  if (!examinee) {
    return res.json({ message: "Your email Incorrect" })
  }
  if (examinee.password == password) {
    return res.json({
      message: "Login Successfully",
      user: {
        email: examinee.email,
        role: "user",
        id: examinee._id
      }
    });
  }
  else {
    return res.json({message:"Your Password is Incorrect"})
  }
});






module.exports = router;//beacuse we want to use this router in other files that's why we use exports
