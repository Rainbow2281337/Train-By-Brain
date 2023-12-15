import { Topics } from "../models/models.js";

class TopicController {
  async create(req, res) {
    try {
      const { position, tag, question, description, author } = req.body;
      const upperCasePosition = position.toUpperCase();

      const topic = await Topics.create({
        position: upperCasePosition,
        tag,
        question,
        description,
        author,
      });

      res.status(200).json(topic);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async findAllTopics(req, res) {
    try {
      const topic = await Topics.find();

      res.status(200).json(topic);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async findAllPositions(req, res) {
    try {
      const positions = await Topics.find().select("position");

      res.status(200).json(positions);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async findTopicByPosition(req, res) {
    try {
      const { position } = req.query;

      // Check if position parameter is provided
      if (!position) {
        res.status(400).json({ message: "Position parameter is required" });
      }
      // Convert position to uppercase
      const upperCasePosition = position.toUpperCase();

      // Using the converted position in the find method
      const topic = await Topics.find({ position: upperCasePosition });

      res.status(200).json(topic);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async findTopicById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "Id not found" });
      }

      const topic = await Topics.findById(id);

      res.status(200).json(topic);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async updateTopic(req, res) {
    try {
      const topic = req.body;

      if (!topic._id) {
        res.status(400).json({ message: "ID not found" });
      }
      const updatedTopic = await Topics.findByIdAndUpdate(topic._id, topic, {
        new: true,
      });

      res.status(200).json(updatedTopic);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async deleteTopic(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID not found" });
      }

      const topic = await Topics.findByIdAndDelete(id);

      res.status(200).json(topic);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

export default new TopicController();
