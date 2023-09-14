const pool = require('../../db');
const queries = require('./queries')

const getCareers = (req, res) => {
    pool.query(queries.getCareers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    }

    )
};

const getCareerById = (req, res) => {
    const id = parseInt(req.params.id);
      if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid career ID' });
    }
  
    pool.query(queries.getCareerById, [id], (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (results.rows.length === 0) {
        return res.status(404).json({ error: 'Career not found' });
      }
  
      res.status(200).json(results.rows);
    });
};
  
const getPartners = (req, res) => {
  pool.query(queries.getPartners, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
  }

  )
};

const getPartnerById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid partner ID' });
}

pool.query(queries.getPartnerById, [id], (error, results) => {
  if (error) {
    console.error('Error querying database:', error);
    return res.status(500).json({ error: 'Database error' });
  }

  if (results.rows.length === 0) {
    return res.status(404).json({ error: 'Partner not found' });
  }

  res.status(200).json(results.rows);
});

};

const getStories = (req, res) => {
  pool.query(queries.getStories, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
  }

  )
};

const getStoryById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
  return res.status(400).json({ error: 'Invalid partner ID' });
}

pool.query(queries.getStoryById, [id], (error, results) => {
  if (error) {
    console.error('Error querying database:', error);
    return res.status(500).json({ error: 'Database error' });
  }

  if (results.rows.length === 0) {
    return res.status(404).json({ error: 'Partner not found' });
  }

  res.status(200).json(results.rows);
});

};
 
module.exports = {
  getCareers,
  getCareerById,
  getPartners,
  getPartnerById,
  getStories,
  getStoryById,
};