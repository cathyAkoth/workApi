const router = require("express").Router();
const candidateController = require("../controllers/controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     candidateVerification:
 *       type: object
 *       
 *       properties:
 *         id:
 *            type: string
 *            description: auto-generated id
 *         image:
 *            type: string
 *         firstName:
 *           type: string
 *           
 *         lastName:
 *           type: string
 *         age:
 *           type: string
 *         numberOfKids:
 *           type: string
 *         nationality:
 *            type: string
 *         countryOfResidence: 
 *             type: string
 *         district:
 *            type: string
 *         religion:
 *           type: string
 *           
 *         educationLevel:
 *           type: string
 *         email:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         whatsAppNo:
 *            type: string
 *         passport: 
 *             type: string
 
 *         workExperience:
 *            type: string
 *         
 *         description:
 *           type: string
 *         fil:
 *           type: string
 *         position:
 *           type: string
 *         price:
 *            type: string
 *         jobLocation: 
 *             type: string
 *         
 *         video:
 *           type: string
 *           
 *         nationalId:
 *           type: string
 *         dayOff:
 *           type: string
 *         availability:
 *           type: string
 *         accommodation:
 *            type: string
 *         languages: 
 *             type: string
 
 *         mainSkills:
 *            type: string
 *         cookingSkills:
 *           type: string
 *           
 *         personality:
 *           type: string
 *         references:
 *           type: string
 *         
 *                 
 */

 /**
  * @swagger
  * tags:
  *   name: CandidateVerification
  *   
  */

/**
 * @swagger
 * /candidateVerification:
 *   get:
 *     summary: Returns the list of allcandidates verified
 *     tags: [CandidateVerification]
 *     responses:
 *       200:
 *         description: The list of the candidates verified
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/candidateVerification'
 */

 
 /**
  * @swagger
  * tags:
  *   name: CandidateVerification
  *   
  */

/**
 * @swagger
 * /candidateVerification:
 *   get:
 *     summary: Returns the list of all candidates Verified
 *     tags: [CandidateVerification]
 *     responses:
 *       200:
 *         description: The list of all candidates verified
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/candidateVerification'
 */


    
 /**
 * @swagger
 * /candidateVerification/:
 *   post:
 *     summary: creates a new verification
 *     tags: [CandidateVerification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/candidateVerification'
 *     responses:
 *       200:
 *         description: The candidate was successfully verified
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/candidateVerification'
 *       500:
 *         description: Some server error
 */
  


router.post("/",  candidateController.createCandidate);

/**
 * @swagger
 * /candidateVerification/{id}:
 *   get:
 *     summary: Get the candidateverification by id
 *     tags: [CandidateVerification]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The candidateVerification id
 *     responses:
 *       200:
 *         description: The candidateVerification description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/candidateVerification'
 *       404:
 *         description: The CandidateVerification was not found
 */



router.get("/:id", candidateController.getCandidateById);

/**
 * @swagger
 * /candidateVerification/{id}:
 *   delete:
 *     summary: Remove the candidateVerification by id
 *     tags: [CandidateVerification]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The candidateVerified id
 * 
 *     responses:
 *       200:
 *         description: The candidateVerification was deleted
 *       404:
 *         description: The candidateVerification was not found
 */



router.delete("/:id", candidateController.removeCandidate);


/**
 * @swagger
 * /candidateVerification/{id}:
 *  put:
 *    summary: Update the candidateVerification by the id
 *    tags: [CandidateVerification]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The candidateVerification id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/candidateVerification'
 *    responses:
 *      200:
 *        description: The CandidateVerification was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/candidateVerification'
 *      404:
 *        description: The CandidateVerification was not found
 *      500:
 *        description: Some error happened
 */

router.put('/:id', candidateController.updateCandidateById);
    
  


module.exports = router;