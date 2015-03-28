
/******************** In AppDelegate.m  *********************/

// AppDelegate.m
#import "AppDelegate.h"
#import "FeedViewController.h"
#import "FavoritesViewController.h"
#import "ProfileViewController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    //Create all views in app.. these are implimented in seperate classes
    FeedViewController *feedController = [[FeedViewController alloc] init];
    FavoritesViewController *favoriteController = [[FavoritesViewController alloc] init];
    ProfileViewController *profileController = [[ProfileViewController alloc] init];

    //The TabBarController is what it sounds like.. a tab bar that gives acess to other view controllers
    //We make this the main view controller because it "contatins" the others 
    UITabBarController *tabBarController = [[UITabBarController alloc] init];

    //Here we gibe the tab bar controller the other views
    [tabBarController setViewControllers:@[feedController, favoriteController, profileController]];

    //initialize a window and give the window its root view controller
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.rootViewController = tabBarController;
    [self.window makeKeyAndVisible];
    return YES;
}
@end


/******************** In view controller.m *********************/


#import "ProfileViewController.h"

@implementation ProfileViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = @"Profile";
        self.tabBarItem.image = [UIImage imageNamed:@"tab_icon_profile"];
    }
    return self;
}

- (void)viewDidLoad
{
    //Call the superconstructor.. this most likely also gives this veiwcontroller a default view. 
    [super viewDidLoad];

    //We want to give this viewcontroller a scrolling view.. this is a property initialized in the .h file 
    self.scrollView = [[UIScrollView alloc] initWithFrame:self.view.bounds];

    //Because the scroll view will not resize with its parent :( we must hard code the resize ...dont like this.. 
    self.scrollView.autoresizingMask = UIViewAutoresizingFlexibleHeight;
    self.scrollView.contentSize = CGSizeMake(320,540);


    //Below are all of the contents of this view 
    UIImageView *higgieView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"higgie_profile_image"]];
    higgieView.frame = CGRectMake(20,20,100,114);

    //Note how we add all of the contents to the scrollView rather than self.view.. so that these things will scroll! 
    [self.scrollView addSubview:higgieView];

    UILabel *nameLabel = [[UILabel alloc] initWithFrame:CGRectMake(20,140,280,40)];
    nameLabel.text = @"Name: Gregg Pollack";
    [self.scrollView addSubview:nameLabel];

    UILabel *cityLabel = [[UILabel alloc] initWithFrame:CGRectMake(20,200,280,40)];
    cityLabel.text = @"From: Orlando";
    [self.scrollView addSubview:cityLabel];

    UITextView *biography = [[UITextView alloc] initWithFrame:CGRectMake(12,260,300,180)];
    biography.font = [UIFont fontWithName:@"Helvetica" size:15];
    biography.editable = NO;
    biography.text = @"Gregg Pollack is the founder of Envy Labs and teacher of multiple courses at Code School. Code School teaches web technologies in the comfort of your browser with video lessons, coding challenges, and screencasts.";
    [self.scrollView addSubview:biography];

    UILabel *memberSinceLabel = [[UILabel alloc] initWithFrame:CGRectMake(20,440,280,40)];
    memberSinceLabel.text = @"Member since November 2012";
    [self.scrollView addSubview:memberSinceLabel];

    UILabel *twitterLabel = [[UILabel alloc] initWithFrame:CGRectMake(20,500,280,40)];
    twitterLabel.text = @"Twitter: greggpollack";
    [self.scrollView addSubview:twitterLabel];

    [self.view addSubview:self.scrollView];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end