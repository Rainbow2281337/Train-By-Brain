import { Interviews } from "../models/models.js";

class InterviewsController {
  async create(req, res) {
    try {
      const { position, title, grade, reference } = req.body;

      // Convert grade and position to uppercase
      const upperCaseGrade = grade.toUpperCase();
      const upperCasePosition = position.toUpperCase();

      const interview = await Interviews.create({
        position: upperCasePosition, // Using the converted position
        title,
        grade: upperCaseGrade, // Using the converted grade
        reference,
      });

      res.status(200).json(interview);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async findAllInterviews(req, res) {
    try {
      const interview = await Interviews.find();

      res.status(200).json(interview);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async findInterviewsByGrade(req, res) {
    try {
      const { grade } = req.query;

      // Check if grade parameter is provided
      if (!grade) {
        res.status(400).json({ message: "Grade parameter is required" });
      }
      // Convert grade to uppercase
      const upperCaseGrade = grade.toUpperCase();

      // Using the converted grade in the find method
      const interview = await Interviews.find({ grade: upperCaseGrade });

      res.status(200).json(interview);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async findInterviewsByPosition(req, res) {
    try {
      const { position } = req.query;

      // Check if position parameter is provided
      if (!position) {
        res.status(400).json({ message: "Position parameter is required" });
      }
      // Convert position to uppercase
      const upperCasePosition = position.toUpperCase();

      // Using the converted position in the find method
      const interview = await Interviews.find({ position: upperCasePosition });

      res.status(200).json(interview);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async deleteInterview(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID not found" });
      }
      const interview = await Interviews.findByIdAndDelete(id);

      res.status(200).json(interview);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

export default new InterviewsController();
