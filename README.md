## Google Script: Bulk Mark Messages as Read
This Google App Script was something that I wrote to mark all of the messages in my Promotions category as read. I had 11,000 when I began work on this script. The functions can easily be modified to perform any function outlined in the [Gmail scripting API](https://developers.google.com/apps-script/reference/gmail/).

There is a timeout on script execution with Google Scripts. I added a loop that repeats the primary function to reduce the impact that this has. However, there is no way to fully circumvent the execution time limit. If you have a large amount of messages to modify, you'll need to run the script a few times.


### Instructions:
1. Open [scripts.google.com](https://script.google.com) and make sure you are signed into the Google account with the mailbox that you wish to modify.
2. Click "New Script" in the top left.
3. Copy/paste the raw code from the script.js file to the code field.
4. Modify the searchString variable to meet the criteria of what messages/threads the function should locate.

   * [This support article](https://support.google.com/mail/answer/7190?hl=en) describes the operators available for Gmail search strings.
5. Save the script and grant it permission to execute. (Note that you will get a warning about the developer being unrecognized. Because we are creating our own code that interacts with our account, it's safe.)
6. Run the script and review the Log content to monitor its progress.
