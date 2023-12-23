/**
 * @openapi
 * components:
 *    schemas:
 *       User:
 *        type: object
 *        required:
 *          - id
 *          - username
 *          - email
 *        properties:
 *         username:
 *           type: string
 *           description: The username of the staff,faculty who is sharing the information.
 *         firstname:
 *           type: string
 *           description: First name
 *         lastname:
 *           type: string
 *           description: Last name
 *         email:
 *           type: string
 *           description: Email address
 *         password:
 *           type: string
 *           description: password
 */
export default interface IUser {
   id: number;
   username: string;
   firstname: string;
   lastname: string;
   email: string;
   password: string;
   created_on: Date;
}
