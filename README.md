# Panther Project

![alt text](front-end/src/assets/shot1.png)
![alt text](front-end/src/assets/shot2.png)
![alt text](front-end/src/assets/shot3.png)
![alt text](front-end/src/assets/shot4.png)

## Local Run

To run this locally do the following steps
1. Set up docker locally. This will be needed to run the database
2. Run yarn in both the front-end and back-end folders
3. Navigate to the back-end folder
4. Run the `start-pgdb.sh` script
5. After complete, run the migrations ` yarn typeorm migration:run -d datasource.ts`
6. Run yarn start:dev
7. In a new termial window navigate to the front-end folder
8. Run `yarn vite`

The database has some customer data, but you will have to create your user to continue through the account creation feature.

## Improvements
One issue I ran into that was a time sink was working with Material Tailwind. Initially, I had a large portion of the front end in MT, but as I was working, I somehow altered some of the styling and tailwind was unable to pick up the components correctly, resulting in poor styling output. Looking over Google and Github issues, I know that the issue was that the framework was unable to properly detect all my components and apply the styles, but all the fixes proposed did not work. Ideally we would use something like MT or Tailwind (I did not use tailwind because some of the more complex style features were behind a paywall from a quick search through their docs.) Chakra UI is good, and I like the V3 more than the previous ones, but it can be a bit verbose and clunky.

I was planning on adding Playwrite and front end tests as well as back end tests, but I spent way to much time trying to fix the Material Tailwind issue, then rewriting the components to use Chakra UI. Ideally, we have at a minimum playwrite on the front end for local debugging, as well as Jest tests. Typically, how I handle tests is I use something like CoPilot to generate a stub for me, then work through and fix them. I tried that with the back end to give you all an idea of the workflow. I also am not entirely sold on the UX flow of having the detailed view be a pop up modal. I really thought it would be a good approach off the bat, but it seems like its missing something. In a real world environment, I would have mocked these with something like Figma beforehand but not having that tool, I fell back on the try and see.

We should move the Matters into their own table IMO and add a typeorm Relation (foreign key) to the customers table. We should also salt or hash the passwords before storing them in the DB. I was going to do this if I had more time. There is a constants.ts file in git for auth as well that should not be there. And we should use a cloud service with their respective env handling for our config of the database host, password, etc (think SSM for AWS).



